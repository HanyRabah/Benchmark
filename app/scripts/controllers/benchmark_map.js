'use strict';

/**
 * @ngdoc function
 * @name benchmarkAngularApp.controller:BenchmarkMapCtrl
 * @description
 * # BenchmarkMapCtrl
 * Controller of the benchmarkAngularApp
 */
angular.module('benchmarkAngularApp')
    .controller('BenchmarkMapCtrl', function($scope) {

        $scope.changeRoute = function(event) {
            console.log('Fetching URL');
        }


        $scope.mapOption = {
            attr: {
                'fill': '#e9e5dc',
                'stroke': 'none',
                'stroke-opacity': '1',
                'stroke-linejoin': 'round',
                'stroke-miterlimit': '4',
                'stroke-width': '0.75',
                'stroke-dasharray': 'none'
            },
            font: {
                'font-size': 12,
                'fill': '#666',
                'stroke': 'none',
                'font-family': 'Arial,Helvetica,sans-serif',
                'opacity': '0.9'
            },
            svgArray: Egypt,
            svgWidth: '2560',
            svgHeight: '1440',
            type: 'map'
        };

        $scope.mapLinks = {
            attr: {
                'fill': '#b28960',
                'stroke': '#fff ',
                'opacity': 0.1,
                'stroke-opacity': '1',
                'stroke-linejoin': 'round',
                'stroke-miterlimit': '4',
                'stroke-width': '2',
                'stroke-dasharray': 'none'
            },
            font: {
                'font-size': 50,
                'fill': '#666',
                'stroke': 'none',
                'font-family': 'Arial,Helvetica,sans-serif',
                'opacity': '0.9'
            },
            svgArray: LocationsLinks,
            svgWidth: '2560',
            svgHeight: '1440',
            type: 'links'
        };

        /*
    	var contactMap = false,
    	ScrollerHeight,
    	svgWidth = 2560,
    	svgHeight = 1440;

        var R = new Raphael('Egyptmap', '100%', '100%'),
            attr = {
                'fill': '#e9e5dc',
                'stroke': 'none',
                'stroke-opacity': '1',
                'stroke-linejoin': 'round',
                'stroke-miterlimit': '4',
                'stroke-width': '0.75',
                'stroke-dasharray': 'none'
            },
            usRaphael = {};
        // the following line makes the Raphael paper fill its container
        R.setViewBox(0, 0, svgWidth, svgHeight, true);
        //Draw Map and store Raphael paths
        for (var state in EgMap) {
            usRaphael[state] = R.path(EgMap[state]).attr(attr);
        }


        for (var cities in EgyptCities) {
            var parts = EgyptCities[cities].split(':');
            // console.log( parts[2]+'  '+ parts[0]+'  '+ parts[1])
            usRaphael[cities] = R.path(EgyptCities[state]).attr(attr);
            var thefontStyle = {
                'font-size': parts[3],
                fill: '#666',
                stroke: 'none',
                'font-family': 'Arial,Helvetica,sans-serif',
                'opacity': '0.9'
            };
            labelPath(usRaphael[cities], parts[2], parts[0], parts[1], cities, thefontStyle);
        }

    	 */



    });