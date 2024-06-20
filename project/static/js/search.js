/**
 * 주어진 선택자에 맞는 요소들의 텍스트 내용으로 배열을 생성합니다.
 * 
 * @param {String} selector - 요소를 선택하기 위한 CSS 선택자입니다.
 * @return {Array} - 선택된 요소들의 텍스트 내용을 담고 있는 배열입니다.
 */
function mkArr(selector){
	let arr = new Array();
	document.querySelectorAll(selector).forEach((dom,index)=>{
	arr[index]=dom.textContent;
	});
	return arr;
}
/**
 * 무작위 컬러 코드를 생성합니다.
 * 
 * @return {String} - 무작위 생성된 컬러 코드를 반환합니다.
 */
function getRandomColor() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
/**
 * 주어진 선택자에 맞는 요소들의 수만큼 무작위 컬러 코드로 배열을 생성합니다.
 * 
 * @param {String} selector - 요소를 선택하기 위한 CSS 선택자입니다.
 * @return {Array} - 무작위 컬러 코드로 채워진 배열입니다.
 */
function colorArr(selector){
	let sizebase = mkArr(selector);
	let size =sizebase.length
	let arr =new Array();
	for(let i=0;i<size;i++){
		arr[i]=getRandomColor();
	}
	return arr
}
['body', 'freshness', 'sour','sparkling','sweet']
console.log(datas);
function config(item){
    taste = item['metadata']
    return {
        type: 'radar',
        data:{
            labels:['body', 'freshness', 'sour','sparkling','sweet'],
            datasets:[{
                label:'맛 분포도',
                data: [taste['body'],taste['freshness'],taste['sour'],taste['sparkling'],taste['sweet']],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
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
    var object =new Chart(document.querySelector(`#product_${index+1}`).getContext('2d'),config(data))
})
