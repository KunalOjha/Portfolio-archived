(function homeController() 
    {
    
    'use strict'
    
    angular
        .module('webApp')
        .controller('HomeController', HomeController);
    
    HomeController.$inject = [];
    
    function HomeController() 
        {
         $(document).ready(function() {
				$("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering(); 
			})
            }
 })() 