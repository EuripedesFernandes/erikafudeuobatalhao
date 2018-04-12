
(function (angular, undefined) {
    'use strict';
angular.module('jeovaapp', [
    'ngRoute',
    'ui.mask',
    'plt.commons',
    'gawServices',
    'plt.services',
    'jeovaControllersjs'
    
])
var app = require('./jeova.tpl.html')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

var porta = process.env.PORT || 3000;

http.listen(porta, function () {
    console.log("servidor rodando com express");
});
})(angular);