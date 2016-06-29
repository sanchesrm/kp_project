var listaClienteService = angular.module('listaClientesService', []);

listaClienteService.factory('listaClientesOp', ['$http', function ($http) {
    var listaClientesOp = {};

    listaClientesOp.getClientes = function(){
        return $http.get('/api/clientes');
    }
    return listaClientesOp;
}]);