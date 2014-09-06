'use strict';

/**
 * @ngdoc function
 * @name benchmarkAngularApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the benchmarkAngularApp
 */
angular.module('benchmarkAngularApp')
  .controller('DetailsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
