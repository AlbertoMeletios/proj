angular.module('starter.controllers', [])

/*
.controller('MenuCtrl', function($scope, PlatillosService) {
  $scope.platillo = [];
  $scope.get = function (){
    PlatillosService.get().then(function(data){
      $scope.platillo = data;
      console.log($scope.platillo);

    });
  };
  $scope.get();
})
*/
.controller('MenuCtrl', function($scope, MenuService){
  $scope.menuDelDia = [];
  $scope.get = function (){
    MenuService.get().then(function(data){
      $scope.menuDelDia = data.data;
      console.log($scope.menuDelDia);
    });
  };
  $scope.get();
  console.log($scope.menu);
})

.controller('PlatilloCtrl', function($scope, MenuService){
  $scope.platillos = [];
  $scope.get = function (){
    MenuService.get().then(function(data){
      $scope.platillos = data.data;
      console.log($scope.platillos);

    });
  };
  $scope.get();
})

.controller('GuarnicionCtrl', function($scope, MenuService){
  $scope.guarniciones = [];
  $scope.get = function (){
    MenuService.get().then(function(data){
      $scope.guarniciones = data.data;
      console.log($scope.guarniciones);

    });
  };
  $scope.get();
  //console.log($scope.g)
})

.controller('BebidaCtrl', function($scope, MenuService){
  $scope.bebidas = [];
  $scope.get = function (){
    MenuService.get().then(function(data){
      $scope.bebidas = data.data;
      console.log($scope.bebidas);

    });
  };
  $scope.get();
  //console.log($scope.g)
})

.controller('PruebaCtrl', function ($scope, $stateParams, PruebaService){
  $scope.prueba = [];
  $scope.get = function (){
    PruebaService.get().then(function(data){
      $scope.prueba = data.data;
      console.log($scope.prueba);

    });
  };
  $scope.get();
  //console.log($scope.g)
})

/*
.controller('HistorialCtrl', function ($scope, $stateParams, PruebaService){
  $scope.pedido = PruebaService.get($stateParams.pedidoYear);
  console.log($scope.pedido);
})*/


;
