'use strict';

describe('Controller: GoogleMapProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('benchmarkAngularApp'));

  var GoogleMapProjectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoogleMapProjectsCtrl = $controller('GoogleMapProjectsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
