angular.module('starter.services', [])

.factory('PlatillosService', function($http, $q) {
  return {
    get: function(){
      var deferred = $q.defer();
      var obj = {content:null};
      var direccion = "http://etnia.digital/cuisine/api/platillos";
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

//INTENTO DE SERVICIO PARA MENÚ

.factory('MenuService', function() {
  var menuDelDia = [{
    id: 0,
    name: 'JUEVES ',
    dian:'27/',
    mes:'JULIO/',
    year:'2017:'
  }, {
    id: 1,
    name: 'Platillos',
    dato1: 'enchiladas suizas',
    dato2: 'enchiladas rojas',
    dato3: 'enchiladas verdes',
    dato4: 'chicharrón verde',
    dato5: 'chicharrón rojo',
    dato6: 'chicharrón azul',
  }, {
    id: 2,
    name: 'Guarniciones',
    dato1: 'arroz rojo',
    dato2: 'arroz jardinero',
    dato3: 'frijol',
    dato4: 'sopa verde',
    dato5: 'espagueti',
  }, {
    id: 3,
    name: 'Bebidas',
    dato1: 'té',
    dato2: 'jamaica',
    dato3: 'piña',
  }];

  return {
    all: function() {
      return menuDelDia;
    }
  };
})


// DO NOT TOUCH
.factory('Chats', function() {

  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
