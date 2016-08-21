var angular = require('angular');

var rules = angular.module('dadtown.rules', ['ngRoute']);

rules.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/rules', {
        templateUrl: 'rules.html'
    });
}]);