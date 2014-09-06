'use strict';

/**
 * @ngdoc function
 * @name benchmarkAngularApp.controller:GoogleMapProjectsCtrl
 * @description
 * # GoogleMapProjectsCtrl
 * Controller of the benchmarkAngularApp
 */
angular.module('benchmarkAngularApp')
    .controller('GoogleMapProjectsCtrl', function($scope, $rootElement, $location, $timeout) {

         google.maps.visualRefresh = true;



        $scope.$on('handleMap', function(events, data, zoom) {
            if (!zoom) {
                zoom = 14
            };
            $scope.map = {
                center: {
                    latitude: data[0],
                    longitude: data[1]
                },
                zoom: zoom
            };
        });


        var mapLocations = ['north-cost', 'new-cairo', 'red-sea', 'zamalek', 'zayed', 'heliopolis', 'maadi', 'uptowncairo'],
            latlong = ['31.068815,28.22319', '30.038075,31.4954073', '27.642173,33.86673', '30.060942,31.219709', '29.994489,31.213531', '30.090984,31.322709', '29.957942,31.260231', '30.0248969,31.299603,16'];

        var path = $location.path();
        path = path.substr(1).split('/');

        var item = latlong[mapLocations.indexOf(path[1])].split(',');

        $scope.map = {
            center: {
                latitude: item[0],
                longitude: item[1]
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
        $scope.polygons = [{
            id: 1,
            path: [{
                latitude: 30.048494665174147,
                longitude: 31.490614414215088
            }, {
                latitude: 30.048606107921714,
                longitude: 31.490120887756348
            }, {
                latitude: 30.04850550008017,
                longitude: 31.487964391708374
            }, {
                latitude: 30.04609087669028,
                longitude: 31.487867832183838
            }, {
                latitude: 30.046063015307645,
                longitude: 31.49059295654297
            }, {
                latitude: 30.046118738065047,
                longitude: 31.490743160247803
            }, {
                latitude: 30.046239470598586,
                longitude: 31.490871906280518
            }, {
                latitude: 30.04637877718517,
                longitude: 31.490893363952637
            }, {
                latitude: 30.0480504409427,
                longitude: 31.490871906280518
            }],
            stroke: {
                color: '#6060FB',
                weight: 3
            },
            editable: false,
            draggable: false,
            geodesic: false,
            visible: true,
            zindex: 10,
            clickable: true,
            fill: {
                color: '#ff0000',
                opacity: 0.8
            }
        }];
    });