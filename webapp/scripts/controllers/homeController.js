(function homeController() 
    {
    
    'use strict'
    
    angular
        .module('webApp')
        .controller('HomeController', HomeController);
    
    HomeController.$inject = [];
    
    function HomeController() 
        {
            $('#home-video').on('loadstart', function (event) {
              $(this).addClass('background');
              $(this).attr("poster", "/your/loading.gif");
            });

            $('#home-video').on('canplay', function (event) {
              $(this).removeClass('background');
              $(this).removeAttr("poster");
            });
        }
    
 })() 