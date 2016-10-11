 var app = angular.module('myApp', ['ngAria','ngAnimate','ngMaterial','ngMessages','ngRoute','gridster','chart.js']);
app.config(function($routeProvider, $compileProvider, $mdThemingProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController'
    }) 
});
