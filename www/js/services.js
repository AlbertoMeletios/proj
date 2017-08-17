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
    name: 'Platillos',
    dato1: 'enchiladas suizas',
    dato2: 'enchiladas rojas',
    dato3: 'enchiladas verdes',
    dato4: 'chicharrón verde',
    dato5: 'chicharrón rojo',
    dato6: 'chicharrón azul',
  }, {
    name: 'Guarnicion',
    dato1: 'arroz rojo',
    dato2: 'arroz jardinero',
    dato3: 'frijol',
    dato4: 'sopa verde',
    dato5: 'espagueti',
  }, {
    name: 'bebida',
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






.factory('pedidoService', function(){
  var pedidos = [{
    id:0,
    autor:1,
    platillo:1,
    guarniciones:1,
    bebidas:2,
    timestamp:'2016-01-14'
  }, {
	  id:1,
    autor:1,
    platillo:5,
    guarniciones:3,
    bebidas:3,
    timestamp:'2016-02-12' 
  }, {
	  id:2,
    autor:1,
    platillo:3,
    guarniciones:2,
    bebidas:1,
    timestamp:'2017-01-23'  
  }, {
	  id:3,
    autor:1,
    platillo:4,
    guarniciones:3,
    bebidas:2,
    timestamp:'2017-02-20'  
  }, {
    id:4,
    autor:1,
    platillo:4,
    guarniciones:3,
    bebidas:2,
    timestamp:'2015-02-20'  
  }, {     	  
    id:5,
    autor:1,
    platillo:6,
    guarniciones:3,
    bebidas:1,
    timestamp:'2017-01-15'
  }];

   return {
      all: function() {
        return pedidos;
      },
       get: function(pedidoYear){
         var filter = [];

         var anio = 0;

         for(i=0; i<pedidos.length; i++){
            var split = pedidos[i].timestamp.split('-');


            if(split[0] =! parseInt(pedidoYear)){
              filter.push(pedidos[i]);
            }
            else
              return null;

           }
         return filter;
      }
    };

}) 

/*
.factory('Historiales', function{
  let historiales = [{
    id: 0,
    ano: 2017,
    mes: 'Agosto',
    dia: '11',
  }];
})
*/
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
