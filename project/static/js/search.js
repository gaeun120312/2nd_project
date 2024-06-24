function getRandomPastelColorWithAlpha(alpha) {
  // 파스텔톤 색상을 생성하기 위해 각 색상 컴포넌트에 최소값을 설정
  const base = 150; // 최소값을 높게 설정하여 밝은 색상 생성
  const range = 55; // 범위 값을 작게 설정하여 파스텔톤 유지

  // 랜덤한 R, G, B 값 생성 (base 이상, base + range 이하)
  const r = Math.floor(Math.random() * range) + base;
  const g = Math.floor(Math.random() * range) + base;
  const b = Math.floor(Math.random() * range) + base;

  // RGBA 형식으로 반환
  return [`rgba(${r}, ${g}, ${b}, ${alpha})`, `rgba(${r}, ${g}, ${b})`];
}
function changeColor(colorCode,index){
  document.querySelector(`.name.\\3${index+1}`).style.backgroundColor=colorCode;
}
function config(item,index){
    taste = item['metadata']
    colorCode = getRandomPastelColorWithAlpha(0.2);
    changeColor(colorCode[1],index);
    return {
        type: 'radar',
        data:{
            labels:['body', 'freshness', 'sour','sparkling','sweet'],
            datasets:[{
                label:'맛 분포도',
                data: [taste['body'],taste['freshness'],taste['sour'],taste['sparkling'],taste['sweet']],
                fill: true,
                backgroundColor: colorCode[0],
                borderColor: colorCode[1],
                pointBackgroundColor: colorCode[1],
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: colorCode[1]
            }]
        },
        options: {
          scales: {
              r: {
                  pointLabels: {
                      color: 'blue', // 레이더 차트의 라벨 색상
                      font: {
                          size: 14
                      }
                  },
                  ticks: {
                      color: 'blue' // 레이더 차트의 축 눈금 색상
                  },
                  grid: {
                      color: 'grey' // 레이더 차트의 그리드 색상
                  },
                  angleLines: {
                      color: 'grey' // 레이더 차트의 각도선 색상
                  }
              }
          },
          plugins: {
              legend: {
                  labels: {
                      color: 'red' // 범례 라벨 색상
                  }
              }
          }
      }
  }
}
objects=[]
// 차트 생성
datas.forEach((data,index)=>{
    let object =new Chart(document.querySelector(`#product_${index+1}`).getContext('2d'),config(data,index))
    objects.push(object);
})
document.querySelector('#menu').addEventListener('click', function(){
  document.querySelector('.search_box').classList.toggle('active');
  document.querySelector('.dark_mode').classList.toggle('active');

});
document.querySelector('#dark').addEventListener('click', function(){
  document.querySelector('body').classList.toggle('dark-mode');
  objects.forEach((object)=>{
    if(object.options.scales.r.pointLabels.color!='white'){
      object.options.scales.r.pointLabels.color = 'white';
      object.options.scales.r.ticks.color = 'blue';
      object.options.scales.r.grid.color = 'white';
      object.options.scales.r.angleLines.color = 'white';
      object.options.plugins.legend.labels.color = 'white';
  
      // 차트 업데이트
      object.update();
    }else{
        // 옵션 변경
        object.options.scales.r.pointLabels.color = 'blue';
        object.options.scales.r.ticks.color = 'blue';
        object.options.scales.r.grid.color = 'grey';
        object.options.scales.r.angleLines.color = 'grey';
        object.options.plugins.legend.labels.color = 'red';
    
        // 차트 업데이트
        object.update();
    }
    console.dir(object.options.scales.r)
  })
  if(document.querySelector('#dark').classList.contains('fa-regular')){
    document.querySelector('#dark').classList.replace('fa-regular','fa-solid');
  }else{
    document.querySelector('#dark').classList.replace('fa-solid','fa-regular');
  }
});