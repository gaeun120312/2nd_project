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
console.log(datas);
function changeColor(colorCode,index){
  document.querySelector(`.name.\\3${index+1}`).style.backgroundColor=colorCode;
}
function config(item,index){
    taste = item['metadata']
    colorCode = getRandomPastelColorWithAlpha(0.2);
    console.log(colorCode);
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
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      }
}
// 차트 생성
datas.forEach((data,index)=>{
    var object =new Chart(document.querySelector(`#product_${index+1}`).getContext('2d'),config(data,index))
})
document.querySelector('#menu').addEventListener('click', function(){
  document.querySelector('.search_box').classList.toggle('active');
});