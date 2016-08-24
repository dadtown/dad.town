var angular = require('angular');

var about = angular.module('dadtown.about', ['ngRoute']);

about.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'about/about.html'
    });

    $routeProvider.when('/about/partners', {
        templateUrl: 'about/partners.html'
    });
}]);