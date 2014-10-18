'use strict';

/**
 * @ngdoc function
 * @name benchmarkAngularApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the benchmarkAngularApp
 */
angular.module('benchmarkAngularApp')
    .controller('SearchCtrl', function($scope, $rootScope) {

        // search template.
        $scope.searchResult = {
            url: 'templates/search-results.html'
        };
        $scope.sideNav = {
            url: 'templates/side-nav.html'
        };
        $scope.googleMap = {
            url: 'templates/google-map.html'
        };

        //showSearchBox = ! showSearchBox

        var showResultBox = function() {
            $('.search-results-wrapper').addClass('showBox').removeClass('hideBox');
            $('.side-nav-wrapper').addClass('hideNav').removeClass('showNav');
            $('.angular-google-map-container').addClass('resizeMap');
            $rootScope.$broadcast('handleMap');
        }
        var showNavBox = function() {
            $('.search-results-wrapper').addClass('hideBox').removeClass('showBox');
            $('.side-nav-wrapper').addClass('showNav').removeClass('hideNav');
            $('.angular-google-map-container').removeClass('resizeMap');
            $rootScope.$broadcast('handleMap');
            //$rootScope.$broadcast('handleMap');
        }

        $scope.projectInfo = function(events, data) {
            showResultBox();
        }
        $scope.closeSearch = function(events, data) {
            showNavBox();
        }

        $scope.currencyFormatting = function(value) {
            return value.toString() + " L.E"
        }

        $scope.position = {
            minAge: 100000,
            maxAge: 10000000
        };
    });