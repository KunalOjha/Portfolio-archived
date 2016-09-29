(function() 
    {
    
    'use strict'
    
    angular
        .module('webApp')
        .controller('WorkHistoryController', WorkHistoryController);
    
    WorkHistoryController.$inject = [];
    
    function WorkHistoryController($scope) 
        {
         $scope.chart = [10, 20, 30]
        }
 })();