var angular = require('angular');

var services = angular.module('dadtown.services', ['ngRoute']);

services.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/services', {
        templateUrl: 'services.html'
    });
}]);