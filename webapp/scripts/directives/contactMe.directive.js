(function()
{
	'use strict';
  
	angular
		.module('webApp')
		.directive('contactMe', contactMe);
    
	function contactMe()
	{
        var directive = 
            {
                restrict: 'E',
                controller: 'ContactMeController',
                scope: {},
                templateUrl: './views/contactMe.html'
            };
        
		return directive;

	}
})();