(function()
{
	'use strict';
  
	angular
		.module('webApp')
		.directive('mainHero', mainHero);
    
	function mainHero()
	{
		var directive = 
            {
                restrict: 'E',
                controller: 'MainHeroController',
                controllerAs: 'mainHero',
                scope: {},
                templateUrl: './views/mainHero.html'
            };
        
		return directive;

	}
})();