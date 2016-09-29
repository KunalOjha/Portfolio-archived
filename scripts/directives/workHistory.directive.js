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
                restrict: 'EA',
                //controller: 'WorkHistoryController',
                //controllerAs: 'workhistory',
                scope: {data: '=chartData'},
                replace: true,
                template: "<div style='width:100%'></div>",
                link: workHistoryLink,
            };
        
		return directive;
	}
    
    function workHistoryLink(scope, element/*, attrs, ctrl, tfn*/) 
    {
     scope.$watch('data', function(){
        var chart = d3.select(element[0]);
        chart.append("div").attr("class", "chart")
          .selectAll('div')
          .data(scope.data).enter().append("div")
          .style('background', 'blue')
          //.transition().ease("elastic")
          .style("width", function(d) { return d + "%"; })
          .text(function(d) { return d + "%"; })
          .exit().remove();
      }, true);  
    }   

})();