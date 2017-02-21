(function()
{
	'use strict';
  
	angular
		.module('webApp')
		.directive('blog', blog);
    
	function blog()
	{
		var directive = 
            {
                restrict: 'E',
                controller: 'BlogController',
                controllerAs: 'blog',
                scope: {},
                templateUrl: './views/blog.html'
            };
        
		return directive;

	}
})();