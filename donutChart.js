google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(donutChart);

function donutChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Brasileiro', 9],
    ['Norte-americano', 3],
    ['Chinês', 1],
    ['Britânico', 1],
    ['Italiano', 1]
  ]);

  var options = {
    pieHole: 0.4,
    backgroundColor: '#F5E8D3',
    colors: ['#D4CF98', '#DECE83', '#C7AE80', '#DEAA83', '#D6745E']
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
  }