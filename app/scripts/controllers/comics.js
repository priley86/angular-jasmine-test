'use strict';

angular.module('angularTestApp')
  .controller('ComicsCtrl', function ($scope, $http) {

  	$scope.comics = [];

	this.load = function(callback){
		$http.get('http://www.json-generator.com/j/bPpebBuGDC?indent=4').success(function(data){
	  		$scope.comics = data;
	  		callback();
		});
	}
  });
