'use strict';

angular
  .module('angularTestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })   
      .when('/comics', {
        templateUrl: 'views/comics.html',
        controller: 'ComicsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
