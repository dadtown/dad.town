var angular = require('angular');
// Explicitly require for browserify to include angular modules
require('angular-route');
require('./routes/home');
require('./routes/irc');
require('./routes/services');
require('./routes/about');

// OTHER SHIT
window.paceOptions = {
    document: true,
    eventLag: true,
    restartOnPushState: true,
    restartOnRequestAfter: true,
    ajax: {
        trackMethods: ['POST', 'GET']
    }
};

require('pace-progress/pace.min');

var app = angular.module('dadtown', [
    'ngRoute',
    'dadtown.home',
    'dadtown.irc',
    'dadtown.services',
    'dadtown.about'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}]);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);