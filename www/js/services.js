angular.module('starter.services', [])
/*
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

})*/

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


.factory('MenuPService', function($http, $q) {
  return {
    get: function(){
      var deferred = $q.defer();
      var obj = {content:null};
      var direccion = "http://etnia.digital/cuisine/api/menu/platillos";
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


.factory('MenuGService', function($http, $q) {
  return {
    get: function(){
      var deferred = $q.defer();
      var obj = {content:null};
      var direccion = "http://etnia.digital/cuisine/api/menu/guarniciones";
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

.factory('MenuBService', function($http, $q) {
  return {
    get: function(){
      var deferred = $q.defer();
      var obj = {content:null};
      var direccion = "http://etnia.digital/cuisine/api/menu/bebidas";
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



.factory('PedidosService', function($http, $q) {
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
