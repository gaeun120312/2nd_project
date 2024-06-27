
    // Google Charts 라이브러리 로드 완료 후 실행
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawCharts);

    function drawCharts() {
      // 차트 1 - 세로 막대 그래프
      var data1 = google.visualization.arrayToDataTable([
        ['도시', '수'],
        ['서울', 6],
        ['부산', 4],
        ['인천', 2],
        ['광주', 2],
        ['대전', 2],
        ['울산',1],
        ['경기도', 24],
        ['강원도', 12],
        ['세종', 1],
        ['충청북도', 20],  
        ['충청남도', 21],
        ['전라북도', 20],
        ['전라남도', 14],
        ['경상북도', 26],
        ['경상남도', 8],
        ['제주도', 5]
      ]);

      var options1 = {
        title: '지역별 전통주 생산량',
        width: 600,
        height: 300,
        colors: ['#b9ea9f'] 
        
      };

      var chart1 = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
      chart1.draw(data1, options1);

      // 차트 2 - 탁주
      var data2 = google.visualization.arrayToDataTable([
        ['맛', '평균'],
        ['단맛', 2.20],
        ['신맛', 1.77],
        ['청량감', 1.65],
        ['바디감', 2.89],
        ['탄산', 0.03]
      ]);

      var options2 = {
        title: '탁주',
        width: 600,
        height: 600
      };

      var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));
      chart2.draw(data2, options2);

      //차트 3 - 과실주
      var data3 = google.visualization.arrayToDataTable([
        ['맛', '평균'],
        ['단맛', 2.22],
        ['신맛', 1.79],
        ['청량감', 1.67],
        ['바디감', 2.90],
        ['탄산', 0.03]
      ]);

      var options3 = {
        title: '과실주',
        width: 600,
        height: 600
      };

      var chart3 = new google.visualization.PieChart(document.getElementById('chart_div3'));
      chart3.draw(data3, options3);

      //차트4 - 약주/청주
      var data4 = google.visualization.arrayToDataTable([
        ['맛', '평균'],
        ['단맛', 2.19],
        ['신맛', 1.77],
        ['청량감', 1.64],
        ['바디감', 2.89],
        ['탄산', 0.03]
      ]);

      var options4 = {
        title: '약주/청주',
        width: 600,
        height: 600
      };

      var chart4 = new google.visualization.PieChart(document.getElementById('chart_div4'));
      chart4.draw(data4, options4);

      //차트5 -증류수
      var data5 = google.visualization.arrayToDataTable([
        ['맛', '평균'],
        ['단맛', 2.20],
        ['신맛', 1.76],
        ['청량감', 1.64],
        ['바디감', 2.89],
        ['탄산', 0.03]
      ]);

      var options5 = {
        title: '증류수',
        width: 600,
        height: 600
      };

      var chart5 = new google.visualization.PieChart(document.getElementById('chart_div5'));
      chart5.draw(data5, options5);
      //차트6 -기타증류
      var data6 = google.visualization.arrayToDataTable([
        ['맛', '평균'],
        ['단맛', 2.19],
        ['신맛', 1.77],
        ['청량감', 1.65],
        ['바디감', 2.89],
        ['탄산', 0.03]
      ]);
      var options6 = {
        title: '기타주류',
        width: 600,
        height: 600
      };

      var chart6 = new google.visualization.PieChart(document.getElementById('chart_div6'));
      chart6.draw(data6, options6);

     //차트 7 - 주종 별 도수
     var data7 = google.visualization.arrayToDataTable([
        ['종류', '도수 평균'],
        ['탁주', 10.92],
        ['과실주', 12.48],
        ['증류수', 21.91],
        ['약주/청주', 13.51],
        ['기타증류', 15.52],
        ['전체',16.33]
      ]);

      var options7 = {
        title: '주종 별 도수 평균',
        width: 600,
        height: 300,
        colors:['#ffc0cb']
      };

      var chart7 = new google.visualization.ColumnChart(document.getElementById('chart_div7'));
      chart7.draw(data7, options7);
 
    }
// 슬라이크 전체 크기(width 구하기)
const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
let slideItems = document.querySelectorAll(".slide_item");
// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;

// 페이지네이션 생성
const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");

// 무한 슬라이드를 위해 start, end 슬라이드 복사하기
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

// 각 복제한 엘리먼트 추가하기
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
slideItems = document.querySelectorAll(".slide_item");
//
let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
  currSlide++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide <= maxSlide) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    setTimeout(() => {
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    // // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
function prevMove() {
  currSlide--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}

// 버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn.addEventListener("click", () => {
  // 이후 버튼 누를 경우 현재 슬라이드를 변경
  nextMove();
});
// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn.addEventListener("click", () => {
  // 이전 버튼 누를 경우 현재 슬라이드를 변경
  prevMove();
});

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

// 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
for (let i = 0; i < maxSlide; i++) {
  // 각 페이지네이션마다 클릭 이벤트 추가하기
  paginationItems[i].addEventListener("click", () => {
    // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
    currSlide = i + 1;
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}

// 드래그(스와이프) 이벤트를 위한 변수 초기화
let startPoint = 0;
let endPoint = 0;

// PC 클릭 이벤트 (드래그)
slide.addEventListener("mousedown", (e) => {
  startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});

slide.addEventListener("mouseup", (e) => {
  endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint < endPoint) {
    // 마우스가 오른쪽으로 드래그 된 경우
    prevMove();
  } else if (startPoint > endPoint) {
    // 마우스가 왼쪽으로 드래그 된 경우
    nextMove();
  }
});

// 모바일 터치 이벤트 (스와이프)
slide.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
});
slide.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
  if (startPoint < endPoint) {
    // 오른쪽으로 스와이프 된 경우
    prevMove();
  } else if (startPoint > endPoint) {
    // 왼쪽으로 스와이프 된 경우
    nextMove();
  }
});

// 기본적으로 슬라이드 루프 시작하기
let loopInterval = setInterval(() => {
  nextMove();
}, 3000);

// 슬라이드에 마우스가 올라간 경우 루프 멈추기
slide.addEventListener("mouseover", () => {
  clearInterval(loopInterval);
});

// 슬라이드에서 마우스가 나온 경우 루프 재시작하기
slide.addEventListener("mouseout", () => {
  loopInterval = setInterval(() => {
    nextMove();
  }, 3000);
});
document.querySelector('.map_i').addEventListener('click',function(){
  console.log('www')
  document.querySelector('.map').classList.toggle('active');
});
document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  document.querySelector('.load_bg').classList.toggle('active');
  event.target.submit();
});