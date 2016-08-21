var angular = require('angular');

var irc = angular.module('dadtown.irc', ['ngRoute']);

irc.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/irc', {
        templateUrl: 'irc.html'
    });
}]);