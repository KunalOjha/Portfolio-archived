(function mainHeroController() 
    {
    
    'use strict'
    
    angular
        .module('webApp')
        .controller('MainHeroController', MainHeroController);
    
    MainHeroController.$inject = [];
    
    function MainHeroController() 
        {
            alert('works')
        }
    
 })() 