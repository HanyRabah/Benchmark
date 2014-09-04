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
    'google-maps',
     'mb-scrollbar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'homeCtrl'
      })
      .when('/about', {
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
      .when('/google', {
        templateUrl: '../bower_components/angular-google-maps/example/example.html'
      })
       .when('/assets', {
        templateUrl: '../bower_components/angular-google-maps/example/assets'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
