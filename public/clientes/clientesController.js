
var listaClientes = angular.module('listaClientes', ['listaClientesService']);

listaClientes.controller('mainController', function ($scope, $http, listaClientesOp) {
    listaClientesOp.getClientes()
        .success(function (data) {
            $scope.clientes = data;
        })
        .error(function (error) {
            console.log('Ocorreu um erro!');
        });
});

listaClientes.filter('formatDate', [
    '$filter', function($filter) {
        return function(input, format) {
            return $filter('date')(new Date(input), format);
        };
    }
]);
