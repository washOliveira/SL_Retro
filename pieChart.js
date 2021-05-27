google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(pieChart);

function pieChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Masculino',     9],
    ['Feminino',      6]
  ]);

  var options = {
    backgroundColor: '#F5E8D3',
    colors: ['#D4CF98', '#D6745E']
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}