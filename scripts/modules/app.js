(function()
    {
        'use strict'

        angular
            .module('webApp', ['d3','ngRoute'])
            
            .config(function($routeProvider) {
                    $routeProvider
                    
                      .when('/home', {
                        templateUrl: './views/blog.html',
                        controller: 'BlogController',
                        controllerAs: 'blog'
                      })
    
                      .when('/aboutme', {
                        templateUrl: './views/mainHero.html',
                        controller: 'TechExperienceController'
                      }).
                      otherwise({
                        redirectTo: '/home'
                      });
                  });

    })();