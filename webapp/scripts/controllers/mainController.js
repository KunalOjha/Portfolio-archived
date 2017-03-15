(function mainController() 
    {
    'use strict'
    
    angular
        .module('webApp')
        .controller('MainController', function($scope, $location, $anchorScroll) {
        
          $scope.scrollTo = function(id) {
            $location.hash(id);
            var a = $location.hash(id);
            $anchorScroll();
          };
        
        $(".nav li a").on("click", function(){
            $(".nav").find(".active").removeClass("active");
            $(this).parent().addClass("active");
            });
        });
})();