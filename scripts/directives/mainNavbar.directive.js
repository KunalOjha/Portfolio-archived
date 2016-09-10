(function()
{
	'use strict';
  
	angular
		.module('webApp')
		.directive('mainNavbar', mainNavbar);
    
	function mainNavbar()
	{
        var directive = 
            {
                restrict: 'E',
                scope: {},
                templateUrl: './views/mainNavbar.html'
            };
        
		return directive;

	}
})();