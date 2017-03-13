(function()
{
	'use strict';
  
	angular
		.module('webApp')
		.directive('workHistory', workHistory);
    
	function workHistory()
	{
		var directive = 
            {
                restrict: 'E',
                controller: 'WorkHistoryController',
                scope: {},
                templateUrl: './views/workHistory.html'
            };
        
		return directive;

	}
})();