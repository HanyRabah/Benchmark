'use strict';

/**
 * @ngdoc function
 * @name benchmarkAngularApp.controller:SellCtrl
 * @description
 * # SellCtrl
 * Controller of the benchmarkAngularApp
 */
angular.module('benchmarkAngularApp')
  .controller('SellCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
