  app.directive('myBarChart', function() {

    return {
      restrict: 'E',
      scope: {
        chart: '=info',
      },
      templateUrl: 'views/myCustomBarChart.html',
    };
  });