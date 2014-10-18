'use strict';

/**
 * @ngdoc function
 * @name benchmarkAngularApp.controller:GoogleMapProjectsCtrl
 * @description
 * # GoogleMapProjectsCtrl
 * Controller of the benchmarkAngularApp
 * https://github.com/allenhwkim/angularjs-google-maps
 */
angular.module('benchmarkAngularApp')
    .controller('GoogleMapProjectsCtrl', function($scope, $rootScope, $location, $timeout) {

       

        var mapLocations = [{
            area: "nothh-cost",
            latlong: "31.068815,28.22319"
        }, {
            area: "new-cairo",
            latlong: "30.038075,31.4954073"
        }, {
            area: "red-sea",
            latlong: "27.642173,33.86673"
        }, {
            area: "zamalek",
            latlong: "30.060942,31.219709"
        }, {
            area: "zayed",
            latlong: "29.994489,31.213531"
        }, {
            area: "heliopolis",
            latlong: "30.090984,31.322709"
        }, {
            area: "maadi",
            latlong: "29.957942,31.260231"
        }, {
            area: "uptowncairo",
            latlong: "30.0248969,31.299603"
        }];

        $scope.$on('handleMap', function(events, data, zoom) {
            if (!zoom) {
                zoom = 14
            };
            if(!data){
                data = item;
            };
           
            $scope.map = {
                center: {
                    latitude: data[0],
                    longitude: data[1]
                },
                zoom: zoom,
                refresh: true
            };

        });

        var path = $location.path();
        path = path.substr(1).split('/');

        var item;
        var getLongLat = $.each(mapLocations, function() {
            if (this.area === path[1]) {
                item = this.latlong
                item = item.split(',');
            }
        });

        $scope.map = {
            center: {
                latitude: item[0],
                longitude: item[1]
            },
            pan: true,
            zoom: 14,
            refresh: true,
            options: {
                disableDefaultUI: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.BOTTOM_CENTER
                },
                zoomControl: true,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            },
            events: {},
            bounds: {},
            polys: []
        };



        $scope.polygons = [{
            id: 1,
            path: [
                [30.048494665174147, 31.490614414215088],
                [30.048606107921714, 31.490120887756348],
                [30.04850550008017, 31.487964391708374],
                [30.04609087669028, 31.487867832183838],
                [30.046063015307645, 31.49059295654297],
                [30.046118738065047, 31.490743160247803],
                [30.046239470598586, 31.490871906280518],
                [30.04637877718517, 31.490893363952637],
                [30.0480504409427, 31.490871906280518]
            ],
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
            },
            info: {
                projectname: "Hamada",
                project: 3
            }
        },{
            id: 2,
            path: [
                [30.048494665174147, 31.490614414215088],
                [30.048606107921714, 31.490120887756348],
                [30.04850550008017, 31.487964391708374],
                [30.04609087669028, 31.487867832183838],
                [30.046063015307645, 31.49059295654297],
                [30.046118738065047, 31.490743160247803],
                [30.046239470598586, 31.490871906280518],
                [30.04637877718517, 31.490893363952637],
                [30.0480504409427, 31.490871906280518]
            ],
            stroke: {
                color: '#ff0000',
                weight: 3
            },
            editable: false,
            draggable: true,
            geodesic: false,
            visible: true,
            zindex: 10,
            clickable: true,
            fill: {
                color: '#ff0000',
                opacity: 0.8
            },
            info: {
                projectname: "samnta",
                project: 4
            }
        }];



    });