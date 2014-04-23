'use strict';

describe('Controller: ComicsCtrl', function () {

  var scope, controller, $httpBackend,
    url = 'http://www.json-generator.com/j/bPpebBuGDC?indent=4';

  beforeEach(function(){
    module('angularTestApp');

    inject(function($rootScope, $controller, $injector) {
      scope         = $rootScope.$new();
      controller    = $controller("ComicsCtrl", { $scope: scope });

      $httpBackend  = $injector.get('$httpBackend');
      $httpBackend.when('GET', url).respond([
        { name: "Entry 1" }, 
        { name: "Entry 2" }
      ]);
    });    
  });

  afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

  it("initially has no comics", function(){
    expect(scope.comics.length).toBe(0);
  });

  it("loads comics with injected $httpBacked", function(){
    $httpBackend.expectGET(url);
    
    controller.load(function(){
      expect(scope.comics.length).toBe(2);
    });
    $httpBackend.flush();
  });

});
