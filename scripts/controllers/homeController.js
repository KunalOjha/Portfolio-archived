(function homeController() 
    {
    
    'use strict'
    
    angular
        .module('webApp')
        .controller('HomeController', HomeController);
    
    HomeController.$inject = [];
    
    function HomeController() 
        {
            $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
        }
    
 })() 