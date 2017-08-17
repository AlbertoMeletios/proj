
angular.module('cuisine', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  
  $stateProvider
    .state('login',{
      url:'/login',
      templateUrl: 'templates/login.html'
    })


    .state('inicio',{
      url:'/inicio',
      templateUrl: 'templates/inicio.html'
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
      templateUrl: 'templates/confirmacion.html'
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
    


  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  
  .state('tab.dash', {
    url: '/dash',
    views: {'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
