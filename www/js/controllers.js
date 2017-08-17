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
  $scope.menu = MenuService.all();
  
  //console.log($scope.menu);
  
})

.controller('PlatilloCtrl', function($scope, MenuService){
  $scope.platillos = MenuService.all()[1];
  
  console.log($scope.platillos);
})

.controller('GuarnicionCtrl', function($scope, MenuService){
  $scope.guarniciones = MenuService.all()[2];
  
  //console.log($scope.g)
})

.controller('BebidaCtrl', function($scope, MenuService){
  $scope.bebidas = MenuService.all()[3];
})




.controller('historialCtrl', function ($scope, $stateParams, pedidoService){
  $scope.pedido = pedidoService.get($stateParams.pedidoYear);
  console.log($scope.pedido);
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
