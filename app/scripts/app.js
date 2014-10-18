'use strict';

/**
 * @ngdoc overview
 * @name benchmarkAngularApp
 * @description
 * # benchmarkAngularApp
 *
 * Main module of the application.
 */
angular
  .module('benchmarkAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap',
    'uiSlider',
    'perfect_scrollbar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'homeCtrl'
      })
      .when('/map', {
        templateUrl: 'views/benchmark_map.html',
        controller: 'BenchmarkMapCtrl'
      })
      .when('/login', {
        templateUrl: 'admin/login.html',
        controller: 'LoginCtrl'
      })
      .when('/search/:district', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
       .when('/details', {
        templateUrl: 'views/details.html'
      })
       .when('/sell', {
        templateUrl: 'views/sell.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
