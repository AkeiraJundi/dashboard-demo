  app.directive('myChart', function() {

    return {
      restrict: 'E',
      scope: {
        chart: '=info',
        clickHandler:'=onClick',
        buttonOnClick:'=buttonClick'
      },
      templateUrl: 'views/myCustomChart.html',
    };
  });