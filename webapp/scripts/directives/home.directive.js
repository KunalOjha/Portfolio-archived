(function()
{
	'use strict';
  
	angular
		.module('webApp')
		.directive('home', home);
    
	function home()
	{
		var directive = 
            {
                restrict: 'E',
                controller: 'HomeController',
                scope: {},
                templateUrl: './views/home.html'
            };
        
		return directive;

	}
})();