angular.module('starter.services', [])

.factory('MenuService', function($http, $q) {
  return {
    get: function(){
      var deferred = $q.defer();
      var obj = {content:null};
      var direccion = "http://etnia.digital/cuisine/api/menu";
      $http({
        method : "GET", 
        url :  direccion
      }).then(function successCallback(response) {
          deferred.resolve(response);
      }, function errorCallback(error) {
          deferred.reject(error);
      });

      return deferred.promise;
    }
  };
})

.factory('PruebaService', function($http, $q) {
  return {
    get: function(){
      var deferred = $q.defer();
      var obj = {content:null};
      var direccion = "http://etnia.digital/cuisine/api/pedidos";
      $http({
        method : "POST", 
        url :  direccion
      }).then(function successCallback(response) {
          deferred.resolve(response);
      }, function errorCallback(error) {
          deferred.reject(error);
      });

      return deferred.promise;
    }
  };
})




;
