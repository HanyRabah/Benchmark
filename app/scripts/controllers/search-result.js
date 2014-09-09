'use strict';

/**
 * @ngdoc function
 * @name benchmarkAngularApp.controller:SearchResultCtrl
 * @description
 * # SearchResultCtrl
 * Controller of the benchmarkAngularApp
 */
angular.module('benchmarkAngularApp')
  .controller('SearchResultCtrl', function ($scope) {
    var searchBox = $('.search-results-box');
    	searchBox.css('bottom', - searchBox.height());
  });
