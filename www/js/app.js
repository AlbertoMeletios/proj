
angular.module('cuisine', ['ionic', 'starter.controllers', 'starter.services', 'starter.constants'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url:'/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
    
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
     controller: 'SignupCtrl'
    })
 

    .state('inicio', {
      url:'/inicio',
      templateUrl: 'templates/inicio.html',
      controller: 'InicioCtrl'
    })

    .state('menu',{
      url:'/menu',
      templateUrl: 'templates/menu.html',
      controller : 'MenuCtrl'
    })


    .state('platillo',{
      url:'/platillo',
      templateUrl: 'templates/platillo.html',
      controller : 'PlatilloCtrl'
    })
    .state('guarnicion',{
      url:'/guarnicion',
      templateUrl: 'templates/guarnicion.html',
      contoller: 'GuarnicionCtrl' 
    })
    .state('bebida',{
      url: '/bebida',
      templateUrl: 'templates/bebida.html',
      controller: 'BebidaCtrl'
    })
    .state('confirmacion',{
      url: '/confirmacion',
      templateUrl: 'templates/confirmacion.html',
      controller: 'ConfirmacionCtrl'
    })
    .state('gracias',{
      url: '/gracias',
      templateUrl: 'templates/gracias.html'
    })

    .state('hostorial',{
      url:'/historial',
      templateUrl: 'templates/historial.html',
      controller: 'historialCtrl'
    })
    .state('mes',{
      url:'/mes',
      templateUrl: 'templates/mes.html'
    })
    .state('pedidos',{
      url:'/pedidos',
      templateUrl: 'templates/pedidos.html'
    })
    .state('prueba',{
      url:'/prueba',
      templateUrl: 'templates/prueba.html',
      controller: 'PruebaCtrl'
    })
    
  $urlRouterProvider.otherwise('login');

})
/*
.run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
  $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {
    if (!AuthService.isAuthenticated()) {
      console.log(next.name);
      if (next.name !== 'login' && next.name !== 'register') {
        event.preventDefault();
        $state.go('login');
      }
    }
  });
})*/;
