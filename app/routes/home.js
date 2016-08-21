var angular = require('angular');

var home = angular.module('dadtown.home', ['ngRoute']);

home.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home.html'
    });
}]);