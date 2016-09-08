(function mainHeroController() 
    {
    
    'use strict'
    
    angular
        .module('webApp')
        .controller('mainHeroController', mainHeroController);
    
    mainHeroController.$inject = [];
    
    function MainHeroController() 
        {
            alert('works!');
        }
    
 })() 