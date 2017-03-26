(function() {

    'use strict'

    angular
        .module('webApp')
        .controller('AboutMeController', AboutMeController);

    AboutMeController.$inject = ['$scope'];

    function AboutMeController($scope) {
        loadSkillCircles();
        var el = $('.skill-circle'),
            inited = false;

        el.appear({
            force_process: true
        });

        el.on('appear', function() {
            if (!inited) {
                loadSkillCircles();
                inited = true;
            }
        });

        function loadSkillCircles() {
            $('#meter-javascript').circleProgress({
                value: 0.95,
                size: 180,
                fill: {
                    gradient: ["darkgoldenrod", "gold"]
                }
            });

            $('#meter-html5').circleProgress({
                value: 0.85,
                size: 180,
                fill: {
                    gradient: ["red", "orange"]
                }
            });

            $('#meter-css3').circleProgress({
                value: 0.85,
                size: 180,
                fill: {
                    gradient: ["steelblue", "deepskyblue"]
                }
            });
            $('#meter-jquery').circleProgress({
                value: 0.95,
                size: 180,
                fill: {
                    gradient: ["blue", "black"]
                }
            });
            $('#meter-angular').circleProgress({
                value: 0.75,
                size: 180,
                fill: {
                    gradient: ["red", "salmon"]
                }
            });
            $('#meter-node').circleProgress({
                value: 0.65,
                size: 180,
                fill: {
                    gradient: ["darkgreen", "forestgreen"]
                }
            });
            $('#meter-bootstrap').circleProgress({
                value: 0.90,
                size: 180,
                fill: {
                    gradient: ["purple", "indigo"]
                }
            });
            $('#meter-grunt').circleProgress({
                value: 0.90,
                size: 180,
                fill: {
                    gradient: ["peru", "goldenrod"]
                }
            });
        }

        //console.log($scope);    
        $scope.values = $scope.values || {};
        $scope.values = {
            "title": "Let's Get Technical...",
            "name": "Environments",
            "children": [
                 {
                    "name": "Product Management",
                    "children": [{
                            "name": "Waterfall"
                        },
                        {
                            "name": "Agile",
                            "children": [{
                                "name": "Scrum",
                                "children": [{
                                        "name": "Daily Standup"
                                    },
                                    {
                                        "name": "Sprint Planning"
                                    },
                                    {
                                        "name": "Product Backlog Refinement"
                                    },
                                    {
                                        "name": "Sprint Review"
                                    },
                                    {
                                        "name": "Sprint Retrospective"
                                    },
                                ]
                            }]
                        }

                    ]
                },
                {
                    "name": "Frontend",
                    "children": [{
                            "name": "HTML",
                            "children": [{
                                "name": "HTML5"
                            }]
                        },
                        {
                            "name": "CSS",
                            "children": [{
                                    "name": "CSS3"
                                },
                                {
                                    "name": "CSS Frameworks",
                                    "children": [{
                                        "name": "Bootstrap"
                                    }, ]
                                }
                            ]
                        },
                        {
                            "name": "JavaScript",
                            "children": [{
                                    "name": "ES5/6"
                                },
                                {
                                    "name": "JavaScript Frameworks",
                                    "children": [{
                                            "name": "jQuery"
                                        },
                                        {
                                            "name": "Angular"
                                        },
                                        {
                                            "name": "React*"
                                        },
                                        {
                                            "name": "SAPUI5"
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Preprocessors",
                            "children": [{
                                    "name": "SASS"
                                },
                                {
                                    "name": "LESS"
                                }
                            ]
                        },
                        {
                            "name": "Dependency Management",
                            "children": [{
                                    "name": "Bower"
                                },
                                {
                                    "name": "NPM"
                                },
                            ]
                        }
                    ]
                },
                {
                    "name": "Backend",
                    "children": [{
                            "name": "Scripting Languages",
                            "children": [{
                                "name": "Node.js"
                            }]
                        },
                        {
                            "name": "Data",
                            "children": [{
                                    "name": "MongoDB"
                                },
                                {
                                    "name": "SQL*"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Version Control",
                    "children": [{
                            "name": "Git"
                        },
                        {
                            "name": "Github"
                        },
                        {
                            "name": "Bitbucket"
                        }
                    ]
                },
                {
                    "name": "Build Tools",
                    "children": [{
                            "name": "Task Runners",
                            "children": [{
                                    "name": "Grunt"
                                },
                                {
                                    "name": "Gulp"
                                }
                            ]
                        },
                        {
                            "name": "AWS Code Deploy"
                        },
                        {
                            "name": "TFS Build"
                        },
                        {
                            "name": "Jenkins"
                        }

                    ]
                },
                {
                    "name": "Testing",
                    "children": [{
                            "name": "Unit",
                            "children": [{
                                    "name": "qUnit"
                                },
                                {
                                    "name": "Jasmine"
                                }
                            ]
                        },
                        {
                            "name": "End-to-End",
                            "children": [{
                                    "name": "Protractor"
                                },
                                {
                                    "name": "NightWatch"
                                }
                            ]
                        }

                    ]
                },
            ]

        };
    }
})();