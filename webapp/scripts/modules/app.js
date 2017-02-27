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
                    
                      .when('/contactMe', {
                        templateUrl: './views/contactMe.html',
                        controller: 'ContactMeController',
                      })
    
                      .when('/aboutme', {
                        templateUrl: './views/mainHero.html',
                        controller: 'TechExperienceController'
                      })
                        
                       .when('/resume', {
                        templateUrl: './views/workHistory.html',
                        controller: 'WorkHistoryController'
                    })
                      .otherwise({
                        redirectTo: '/home'
                      });
                  });

    })();