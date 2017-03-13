(function()
{
	'use strict';
  
	angular
		.module('webApp')
		.directive('aboutMe', aboutMe);
    
	function aboutMe()
	{
		var directive = 
            {
                restrict: 'E',
                controller: 'AboutMeController',
                controllerAs: 'aboutMe',
                scope: {},
                templateUrl: './views/aboutMe.html'
            };
        
		return directive;

	}
})();