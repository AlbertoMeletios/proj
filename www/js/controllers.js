angular.module('starter.controllers', [])



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
    console.log(platillo);
    if(platillo.checked)
      $scope.checked++;
    else 
      $scope.checked--;
  };

  $scope.addPlatillo = function(p_id, platillo){
    $rootScope.pedido.platilloId = p_id;
    $rootScope.pedido.platillo = platillo; 
  };

  $scope.guardarPlatillo = function() {
    $state.go('guarnicion');
  };
})

.controller('GuarnicionCtrl', function($scope, MenuService, $rootScope, $state){
  console.log($rootScope.pedido);
  $scope.guarniciones = [];
  
  $scope.guarniciones.gId = [];
  $scope.get = function (){
    MenuService.get().then(function(data){
      $scope.guarniciones = data.data;
     
    });
  };
  $scope.get();
 
  $scope.checked = 0;
  $scope.consoleLog = function(guarnicion){
    console.log(guarnicion.g_id);
    if(guarnicion.checked)
      $scope.checked++;
    else 
      $scope.checked--;
  };
  
  $scope.addGuarnicion = function(g_id){
    
   // $rootScope.pedidoGuarniciones.push(g_id); 
  };

  $scope.guardarGuarnicion = function() {
    $state.go('bebida');
  };
})

.controller('BebidaCtrl', function($scope, MenuService, $rootScope, $state){
  console.log($rootScope.pedido);
  console.log($rootScope.pedidoGuarniciones);
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
    $rootScope.pedido.bebida = b_id;   
  };

  $scope.guardarBebida = function() {
    $state.go('confirmacion');
  };
})

.controller('ConfirmacionCtrl', function ($scope, $rootScope, $state){
  console.log($rootScope.pedido);

  $scope.enviarPedido = function() {
    $state.go('gracias');
  };
})

/*
.controller('GuardarPedidoCtrl',function($http,$scope){
  var guarda = {
      method: 'POST',
      url:'http://etnia.digital/cuisine/api/pedidos',
      data:{platillo:$scope.splatillo, bebida: $scope.sbebida},
      dataType:"jsonp"
  }
})*/
/*
.controller('HistorialCtrl', function ($scope, $stateParams, PruebaService){
  $scope.pedido = PruebaService.get($stateParams.pedidoYear);
  console.log($scope.pedido);
})*/


;
