(function(){
   var app = angular.module('clients', [ ]);
   
   app.controller('ClientController', function(){
        this.clients = contacts;
   });
   
   var contacts = [
   {
    firstName: 'Fran',
    lastName: 'Smith',
    phone: '555-555-5555',
    website: 'www.fransmith.com',
    active: true,
    
    },
    {
    firstName: 'Bill',
    lastName: 'Jones',
    phone: '555-555-4444',
    website: 'www.billjones.com',
    active: false,
    
    }
   ];
})();





