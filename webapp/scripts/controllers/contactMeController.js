(function ContactMeController() {

    'use strict'

    angular
        .module('webApp')
        .controller('ContactMeController', ContactMeController);

    ContactMeController.$inject = [];

    function ContactMeController($scope) {
        function carouselCreated(e, data) {
            var z = {
                z: -5500
            };
            $(z).animate({
                z: -1450
            }, {
                easing: 'easeOutQuad',
                duration: 1000,
                step: function(val) {
                    if (isNaN(val))
                        return; //for some easings we can get NaNs
                    $('.theta-carousel').theta_carousel({
                        'path.settings.shiftZ': val
                    });
                }
            });
        }

        $(document).ready(function() {

            var container = $('#container');

            // fade in effect
            container.css({
                opacity: 0
            });
            container.delay(500).animate({
                opacity: 1
            }, 500);

            container.theta_carousel({
                "filter": ".ex-item",
                "selectedIndex": 0,
                "distance": 40,
                "designedForWidth": 942,
                "designedForHeight": 625,
                "distanceInFallbackMode": 300,
                "path": {
                    "settings": {
                        "shiftY": 349,
                        "shiftZ": -5500,
                        "rotationAngleZY": 19,
                        "a": 833,
                        "b": 835,
                        "endless": true
                    },
                    "type": "ellipse"
                },
                "perspective": 956,
                "sensitivity": 0.2,
                "fadeAway": true,
                "fadeAwayBezierPoints": {
                    "p1": {
                        "x": 0,
                        "y": 100
                    },
                    "p2": {
                        "x": 41,
                        "y": 67
                    },
                    "p3": {
                        "x": 45,
                        "y": 67
                    },
                    "p4": {
                        "x": 100,
                        "y": 33
                    }
                },
                "sizeAdjustment": true,
                "sizeAdjustmentNumberOfConfigurableElements": 4,
                "sizeAdjustmentBezierPoints": {
                    "p1": {
                        "x": 0,
                        "y": 100
                    },
                    "p2": {
                        "x": 1,
                        "y": 61
                    },
                    "p3": {
                        "x": 5,
                        "y": 72
                    },
                    "p4": {
                        "x": 100,
                        "y": 72
                    }
                },
                "reflection": false,
                "reflectionBelow": 29
            });
            carouselCreated.call(container, null, {
                index: container.theta_carousel("option", "selectedIndex")
            });
        });
    }

})()