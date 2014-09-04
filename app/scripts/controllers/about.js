'use strict';

/**
 * @ngdoc function
 * @name benchmarkAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the benchmarkAngularApp
 */
angular.module('benchmarkAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
