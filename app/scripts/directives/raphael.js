'use strict';

/**
 * @ngdoc directive
 * @name benchmarkAngularApp.directive:raphael
 * @description
 * # raphael
 */
angular.module('benchmarkAngularApp')
    .directive('raphael', function($location, $rootScope) {
        return {
            restrict: 'E',
            scope: {
                options: '='
            },
            link: function(scope, element, attrs) {
                var paper = new Raphael(element.attr('id'), '100%', $(window).outerHeight()),
                    attr = scope.options.attr,
                    font = scope.options.font,
                    Map = scope.options.svgArray,
                    type = scope.options.type,
                    svgwidth = scope.options.svgWidth,
                    svgheight = scope.options.svgHeight,
                    draw = {},
                    details = {};

                paper.setViewBox(0, 0, svgwidth, svgheight, true);
                paper.canvas.setAttribute('preserveAspectRatio', 'none');
                $(window).resize(function() {
                    paper.canvas.setAttribute('height', $(window).innerHeight());
                });
                 var labelPath = function(pathObj, text, posx, posy, id, textStyle) {
                    var textObj = pathObj.paper.text(posx, posy, text).attr(textStyle);
                    textObj.node.id = id;
                    textObj.toFront();
                    return textObj;
                }
                for (var item in Map) {
                    var listObj = Map[item];
                    var parts = listObj.split(':');
                    var polys = parts[3];

                    // Draw svg shape //
                    draw[item] = paper.path(polys).attr(attr).toBack();

                    labelPath(draw[item], parts[0], parts[1], parts[2], item, font);


                    if (type === 'links') {
                        draw[item].linkTarget = parts[0].replace(/\s+/g, '-').toLowerCase();

                        (function(obj, state) {

                            var btn = obj[0];
                            btn.style.cursor = 'pointer';

                            btn.onmouseover = function() {
                                obj.toFront();
                                obj.animate({
                                    opacity: 0.5
                                }, 200);
                                paper.safari();
                            };
                            btn.onmousedown = function() {
                                $rootScope.$apply(function() {

                                    $location.path('search/' + obj.linkTarget);
                                });

                            };

                            btn.onmouseout = function() {
                                obj.toBack();
                                obj.animate({
                                    opacity: 0.1
                                }, 200);
                                paper.safari();
                            };

                        })(draw[item], draw);

                    }

                }

            }
        };
    });