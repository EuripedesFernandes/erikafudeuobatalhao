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
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/formulario', {
                    templateUrl: 'teste2/jeova.tpl.html' })
                .when('/404', { templateUrl: 'templates/404.html' })
                .otherwise({
                    redirectTo: '/404'
                });
        }]
    )
var app = require('./jeova-controllers.js')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

var porta = process.env.PORT || 3000;

http.listen(porta, function () {
    console.log("servidor rodando com express");
});
})(angular);