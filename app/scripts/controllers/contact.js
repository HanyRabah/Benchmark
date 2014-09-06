'use strict';

/**
 * @ngdoc function
 * @name benchmarkAngularApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the benchmarkAngularApp
 */
angular.module('benchmarkAngularApp')
    .controller('ContactCtrl', function($scope) {

      $scope.map = {
            center: {
                latitude: '31.068815',
                longitude: '28.22319'
            },
            zoom: 14,
            bounds: {}
        };
        $scope.options = {
            disableDefaultUI: false,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.BOTTOM_CENTER
            },
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
    });