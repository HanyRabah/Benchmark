'use strict';

/**
 * @ngdoc function
 * @name benchmarkAngularApp.controller:SideNavCtrl
 * @description
 * # SideNavCtrl
 * Controller of the benchmarkAngularApp
 */
angular.module('benchmarkAngularApp')
    .controller('SideNavCtrl', function($scope, $rootScope, $window) {


        $scope.districts = [{
            name: 'New Cairo',
            maplocation: ['30.038075','31.4954073'],
            projects: [{
                name: 'Hamada',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Palm Hills',
                location: '5th district',
                properties: '5',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Hecienda',
                location: '5th district',
                properties: '15',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Movanpick',
                location: '5th district',
                properties: '20',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Sharmofers',
                location: '5th district',
                properties: '1',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }]
        }, {
            name: 'North Cost',
            maplocation: ['31.068815','28.22319'],
            projects: [{
                name: 'Mivida',
                location: 'Heliopolis',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Palm Hills',
                location: '5th district',
                properties: '5',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Hecienda',
                location: '5th district',
                properties: '15',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Movanpick',
                location: '5th district',
                properties: '20',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Sharmofers',
                location: '5th district',
                properties: '1',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }]
        }, {
            name: 'Red Sea',
            maplocation: ['27.642173','33.86673'],
            projects: [{
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Palm Hills',
                location: '5th district',
                properties: '5',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Hecienda',
                location: '5th district',
                properties: '15',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Movanpick',
                location: '5th district',
                properties: '20',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Sharmofers',
                location: '5th district',
                properties: '1',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }]
        }, {
            name: 'Zamalek',
            maplocation: ['30.060942','31.219709'],
            projects: [{
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Palm Hills',
                location: '5th district',
                properties: '5',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Hecienda',
                location: '5th district',
                properties: '15',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Movanpick',
                location: '5th district',
                properties: '20',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Sharmofers',
                location: '5th district',
                properties: '1',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }]
        },{
            name: 'Zayed',
            maplocation: ['29.994489','31.213531'],
            projects: [{
                name: 'Hamada',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Palm Hills',
                location: '5th district',
                properties: '5',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Hecienda',
                location: '5th district',
                properties: '15',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Movanpick',
                location: '5th district',
                properties: '20',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Sharmofers',
                location: '5th district',
                properties: '1',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }]
        },{
            name: 'Heliopolis',
            maplocation: ['30.090984','31.322709'],
            projects: [{
                name: 'Hamada',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Palm Hills',
                location: '5th district',
                properties: '5',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Hecienda',
                location: '5th district',
                properties: '15',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Movanpick',
                location: '5th district',
                properties: '20',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Sharmofers',
                location: '5th district',
                properties: '1',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }]
        },{
            name: 'Maadi',
            maplocation: ['29.957942','31.260231'],
            projects: [{
                name: 'Hamada',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Palm Hills',
                location: '5th district',
                properties: '5',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Hecienda',
                location: '5th district',
                properties: '15',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Movanpick',
                location: '5th district',
                properties: '20',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Sharmofers',
                location: '5th district',
                properties: '1',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }]
        },{
            name: 'Uptown Cairo',
            maplocation: ['30.0248969','31.299603,16'],
            projects: [{
                name: 'Hamada',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Palm Hills',
                location: '5th district',
                properties: '5',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Hecienda',
                location: '5th district',
                properties: '15',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Movanpick',
                location: '5th district',
                properties: '20',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Sharmofers',
                location: '5th district',
                properties: '1',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }, {
                name: 'Mivida',
                location: '5th district',
                properties: '25',
                longlat: ['30.048494665174147','31.490614414215088'],
                zoom: 20
            }]
        }]
        $scope.locationAtMap = function(longlat, zoom){
            $rootScope.$broadcast('handleMap', longlat, zoom);
        };






    });