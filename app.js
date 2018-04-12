var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);
(function (angular, undefined) {
    'use strict';
angular.module('formularioApp', [
    'ngRoute',
    'ui.mask',
    'plt.commons',
    'gawServices',
    'plt.services',
    'jeovaControllersjs'
    
])
var app = require('./jeova-controllers.js')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

var porta = process.env.PORT || 3000;

http.listen(porta, function () {
    console.log("servidor rodando com express");
});
})(angular);