'use strict';

/**
 * @ngdoc function
 * @name benchmarkAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the benchmarkAngularApp
 */
angular.module('benchmarkAngularApp')
    .controller('homeCtrl', function($scope) {
        $('.animated-input > input').keyup(function() {
            console.log($(this).val().length);
            if (!$(this).val().length == 0) {
                $(this).addClass('animated-input-focus');
                $(this).next('.animated-input-label').css('opacity', 1);
            } else {
                $(this).removeClass('animated-input-focus');
                $(this).next('.animated-input-label').css('opacity', 0);
            }
        });

        


    });