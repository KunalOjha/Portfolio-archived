(function()
    {
        'use strict'

        angular
            .module('webApp', ['d3','ngRoute', 'theta'])
            
            .config(function($routeProvider) {
                    $routeProvider
                    
                      
                      .when('/home', {
                        templateUrl: './views/home.html',
                        controller: 'HomeController'
                      })
                      .when('/blog', {
                        templateUrl: './views/blog.html',
                        controller: 'BlogController',
                        controllerAs: 'blog'
                      })
    
                      .otherwise({
                        redirectTo: '/home'
                      });
                  });

    })();