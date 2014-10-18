'use strict';

/**
 * @ngdoc directive
 * @name benchmarkAngularApp.directive:resize
 * @description
 * # resize
 */
angular.module('benchmarkAngularApp')
.directive('resize', function($window) {
    return function(scope, element) {
        var w = angular.element($window);

        scope.getWindowDimensions = function() {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };
        scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;

            scope.style = function() {
                return {
                    'height': (newValue.h * 70 / 100  -91) + 'px',
                };
            };
              scope.$broadcast('rebuild:me');

        }, true);

        w.bind('resize', function() {
            scope.$apply();
        });
    }
})