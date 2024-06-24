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
        height: 300
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
        height: 300
      };

      var chart7 = new google.visualization.ColumnChart(document.getElementById('chart_div7'));
      chart7.draw(data7, options7);
 
    }
