

(function (angular, undefined) {
    'use strict';

    angular.module('jeovaControllersjs', [])

        .controller('jeovaControllersjs', jeovaControllersjs);

    jeovaControllersjs.$inject = ['$scope', '$rootScope', '$location'];

    function jeovaControllersjs($scope, $rootScope, $location) {
        var vm = this;
        // DECLARAÇÃO DE VARIAVEIS
        vm.painel = true;
        vm.perguntas = false;
        vm.show1 = false;
        vm.show2 = false;
        vm.fim = false ;


        // DECLARAÇÃO DE FUNCÇOES 
        vm.inicio = inicio;
        vm.viadagem = viadagem;
        vm.verdade = verdade;


        function inicio(painel) {
            vm.perguntas = painel;
            
            if (vm.perguntas = true) {
                vm.show1 = true;
            }
        }
        function viadagem(pergunta2) {
          if (pergunta2 = true)
          return true;
          else { 
              return false;
          }
            
        }
        function verdade(resposta){
        resposta = vm.fim
        if(vm.fim = true){
            vm.msgFinal = true;

        }}
    }

})(angular);