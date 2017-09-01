angular.module('starter.controllers', [])


.controller('LoginCtrl',function($scope, AuthService, $ionicPopup, $state){
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.login = function ( ){
    AuthService.login($scope.user).then(function(msg) {
      $state.go('inicio');
    }, function(errMsg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: errMsg
      });
    });    
  };
})
.controller('RegisterCtrl',function($scope, AuthService, $ionicPopup, $state){
  $scope.user = {
    email: '',
    password: ''
  };
 
  $scope.signup = function() {
    AuthService.register($scope.user).then(function(msg) {
      $state.go('login');
      var alertPopup = $ionicPopup.alert({
        title: 'Register success!',
        template: msg
      });
    }, function(errMsg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Register failed!',
        template: errMsg
      });
    });
  };
})

.controller('InicioCtrl', function($scope, AuthService, API_ENDPOINT, $http, $state) {
  $scope.destroySession = function() {

  };
  $scope.getInfo = function(){
    $http.get(API_ENDPOINT.url + 'usuarios').then(function(result) {
      $scope.userinfo = result.data.msg;
    });
  };
  $scope.logout = function() {
    AuthService.logout();
    $state.go('login')
  };
})

.controller('AppCtrl',function($scope, AuthService, $ionicPopup, $state, AUTH_EVENTS){
  $scope.$on(AUTH_EVENTS.notAutenticated, function(event) {
    AuthService.logout();
    $state.go('login');
    var alertPopup = $ionicPopup.alert({
      title: 'Session Lost!',
      template: 'Sorry, You hace to login again.'
    });
  });
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
    $rootScope.pedido.bebidaId = bebida.b_id;   
  };

  $scope.guardarBebida = function() {
    $state.go('confirmacion');
  };
})

.controller('ConfirmacionCtrl', function ($scope, $rootScope, $state, $http, PedidosService){
  $scope.data = [];
  $scope.enviarPedido = function() {
   var url = 'http://etnia.digital/cuisine/api/pedidos'
    $http.post(url,{
      autor: 1,
      platillo_id: 1,
      bebida_id: 1
    });
    //.push($rootScope.pedido)
    $state.go('gracias');
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



