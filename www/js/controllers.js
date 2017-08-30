angular.module('starter.controllers', [])



.controller('MenuCtrl', function($scope, MenuPService, MenuGService, MenuBService){
  $scope.menuPlatillo = [];
  $scope.getP = function (){
    MenuPService.get().then(function(data){
      $scope.menuPlatillo = data.data;
      console.log($scope.menuPlatillo);
    });
  };
  $scope.getP();

  $scope.menuGuarnicion = [];
  $scope.getG = function (){
    MenuGService.get().then(function(data){
      $scope.menuGuarnicion = data.data;
      console.log($scope.menuGuarnicion);
    });
  };
  $scope.getG();

  $scope.menuBebida = [];
  $scope.getB = function (){
    MenuBService.get().then(function(data){
      $scope.menuBebida = data.data;
      console.log($scope.menuBebida);
    });
  };
  $scope.getB();

})

.controller('PlatilloCtrl', function($scope, MenuPService, $rootScope, $state){
   $scope.platillos = [];
  $rootScope.pedido = {};

  $scope.get = function (){
    MenuPService.get().then(function(data){
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

  $scope.addPlatillo = function(platillo){
    $rootScope.pedido.platilloId = platillo.p_id;
    $rootScope.pedido.platillo = platillo.platillo; 
  };

  $scope.guardarPlatillo = function() {
    $state.go('guarnicion');
  };
})

.controller('GuarnicionCtrl', function($scope, MenuGService, $rootScope, $state){
  console.log($rootScope.pedido);
  $scope.guarniciones = [];
  $scope.pedido = $rootScope.pedido;
  
  $scope.guarniciones.gId = [];
  $scope.get = function (){
    MenuGService.get().then(function(data){
      $scope.guarniciones = data.data;
    });
  };
  $scope.get();
 
  $scope.checked = 0;
  $scope.pedido.guarnicion = [];
  $scope.consoleLog = function(platillo){
    console.log(platillo);
  }
  
  $scope.addGuarnicion = function(guarnicion){
    if(guarnicion.checked){
      $scope.checked++;
      $scope.pedido.guarnicion.push(guarnicion);
    }else{
      $scope.checked--;
      $scope.pedido.guarnicion.splice($scope.pedido.guarnicion.indexOf(guarnicion),1);
    }
  };

  $scope.guardarGuarnicion = function() {
    $state.go('bebida');
  };
})

.controller('BebidaCtrl', function($scope, MenuBService, $rootScope, $state){
  console.log($rootScope.pedido);
  console.log($rootScope.pedidoGuarniciones);
  $scope.bebidas = [];
  $scope.get = function (){
    MenuBService.get().then(function(data){
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

  $scope.addBebida = function(bebida){
    $rootScope.pedido.bebida = bebida.bebida;
    $rootScope.pedido.bebidaId = bebida.b_id;   
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
