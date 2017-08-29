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




.controller('PlatilloCtrl', function($scope, MenuService, $rootScope, $state){
  $scope.platillos = [];
  $rootScope.pedido = {};

  $scope.get = function (){
    MenuService.get().then(function(data){
      $scope.platillos = data.data;
      console.log($scope.platillos);
    });
  };
  $scope.get();

  $scope.checked = 0;
  $scope.consoleLog = function(platillo){
    console.log(platillo.p_id);
    if(platillo.checked)
      $scope.checked++;
    else 
      $scope.checked--;
  };

  $scope.addPlatillo = function(p_id){
    $rootScope.pedido.platillo = p_id;   
  };
  
  $scope.guardarPlatillo = function() {
    $state.go('guarnicion');

  };
})

.controller('GuarnicionCtrl', function($scope, MenuService, $rootScope, $state){
  $scope.guarniciones = [];
  //$rootScope.pedido.guarniciones = {};
  
  $scope.get = function (){
    MenuService.get().then(function(data){
      $scope.guarniciones = data.data;
      console.log($scope.guarniciones);
    });
  };
  $scope.get();

  
  $scope.checked = 0;
  $scope.consoleLog = function(guarniciones){
    console.log(guarniciones.g_id);
    if(guarniciones.checked)
      $scope.checked++;
    else 
      $scope.checked--;
  };
 
  $scope.addGuarnicion = function(g_id){
   //$rootScope.guarniciones.push(g_id); 
  };
  
  $scope.guardarGuarnicion = function() {
    $state.go('bebida');
  };
})



.controller('BebidaCtrl', function($scope, MenuService, $rootScope, $state){
  $scope.bebidas = [];

  $scope.get = function (){
    MenuService.get().then(function(data){
      $scope.bebidas = data.data;
      console.log($scope.bebidas);
    });
  };
  
  $scope.get();

 

  $scope.checked = 0;
  $scope.consoleLog = function(bebida){
    console.log(bebida.b_id);
    if(bebida.checked)
      $scope.checked++;
    else 
      $scope.checked--;
  };

  $scope.addBebida = function(b_id){
    //$rootScope.pedido.bebida = b_id;
   
  };

  $scope.guardarBebida = function() {
    $state.go('confirmacion');
  };
  
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
.controller('EnviarPedidoCtrl', function ($scope, $http, $rootScope){
  $rootScope.pedido = [$scope.pedidirPlatillo];  
  
})*/
.controller('GuardarPedidoCtrl',function($http,$scope){
  var guarda = {
      method: 'POST',
      url:'http://etnia.digital/cuisine/api/pedidos',
      data:{platillo:$scope.splatillo, bebida: $scope.sbebida},
      dataType:"jsonp"
  }
})
/*
.controller('HistorialCtrl', function ($scope, $stateParams, PruebaService){
  $scope.pedido = PruebaService.get($stateParams.pedidoYear);
  console.log($scope.pedido);
})*/


;
