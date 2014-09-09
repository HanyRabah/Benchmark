'use strict';

/**
 * @ngdoc function
 * @name benchmarkAngularApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the benchmarkAngularApp
 */
angular.module('benchmarkAngularApp')
    .controller('SearchCtrl', function($scope) {
        // search template.
        $scope.searchResult = { url: 'templates/search-results.html'};
        $scope.sideNav = { url: 'templates/side-nav.html'};
        $scope.googleMap = { url: 'templates/google-map.html'};
        
    });

