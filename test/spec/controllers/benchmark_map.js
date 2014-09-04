'use strict';

describe('Controller: BenchmarkMapCtrl', function () {

  // load the controller's module
  beforeEach(module('benchmarkAngularApp'));

  var BenchmarkMapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BenchmarkMapCtrl = $controller('BenchmarkMapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
