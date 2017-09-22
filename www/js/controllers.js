angular.module('starter.controllers', [])

.controller ('LoginCtrl', function($scope, UserService, $state, $ionicPopup, $rootScope){ 
  $scope.usuarios = [];
  $scope.estado='';
  $scope.get = function (){
    UserService.get().then(function(data){
      $scope.usuarios = data.data;	   
      //console.log($scope.usuarios);	   	
    });
  };
  $scope.get(); 
  
  $scope.entrar = function(){
     for( var i=0;i < $scope.usuarios.length; i++){
      if($scope.usuarios[i].email == $scope.user.email && $scope.usuarios[i].password == $scope.user.password){
        $scope.estado= 'True';
        $rootScope.autor = $scope.usuarios[i].id;
        break;
      }
        $scope.estado= 'False';   	   
     }
     if ($scope.estado == 'True'){
       console.log($rootScope.autor)
      $state.go('inicio');
     } else{
      var alertPopup = $ionicPopup.alert({
        title :'ERROR',
        template: '¡email o contraseña incorrecta!'
      });
     }
  };
})

.controller('SignupCtrl',function($scope, $ionicPopup, $state, $http){
  $scope.data = {};
 $scope.signup = function () {
   var request = $http({
     method: "post",
     url: "http://etnia.digital/cuisine/api/signup",
     data: {
       email: $scope.data.email,
       password: $scope.data.password
     },
headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
   })
   .success(function(data){
    $ionicPopup.alert({
      title: 'HECHO',
      template: 'Usted ha creado un nuevo usuario'
    });
   })
   .error(function (errResponse, status) {
    if(status == 409){
          $ionicPopup.alert({
              title: 'ERROR',
            template: '¡Eeste email no es válido!'
      });
    }
  });
 }
}) 


.controller('InicioCtrl', function($scope){

})
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
    $rootScope.pedido.autor = $rootScope.autor;
    $rootScope.pedido.platillo_id = platillo.p_id;
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
    //console.log(platillo);
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
  //console.log($rootScope.pedido);
  //console.log($rootScope.pedidoGuarniciones);
  $scope.bebidas = [];
  $scope.get = function (){
    MenuBService.get().then(function(data){
      $scope.bebidas = data.data;
      //console.log($scope.bebidas);
    });
  };
  $scope.get();
  $scope.checked = 0;
  $scope.consoleLog = function(bebida){
    //console.log(bebida.b_id);
    if(bebida.checked)
      $scope.checked++;
    else 
      $scope.checked--;
  };

  $scope.addBebida = function(bebida){
    $rootScope.pedido.bebida = bebida.bebida;
    $rootScope.pedido.bebida_id = bebida.b_id;   
  };

  $scope.guardarBebida = function() {
    $state.go('confirmacion');
  };
})

.controller('ConfirmacionCtrl', function ($scope, $rootScope, $state, $http, $ionicPopup, PedidosService){
  $scope.data = [];
  console.log($rootScope.pedido);
  $scope.enviarPedido = function() {
    var request = $http({
      method: "post",
      url: "http://etnia.digital/cuisine/api/pedidos",
      data: {
        autor:  $rootScope.pedido.autor,
        platillo_id:  $rootScope.pedido.platillo_id,
        bebida_id:  $rootScope.pedido.bebida_id,
        guarniciones: $rootScope.pedido.guarnicion.g_id,
      },
 headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .success(function(data){
     $ionicPopup.alert({
       title: 'HECHO',
       template: 'Usted ha enviado un pedido'
     });
    })
    .error(function (errResponse, status) {
     if(status == 409){
           $ionicPopup.alert({
               title: 'ERROR'
       });
     }
   });
  };
})

;
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



