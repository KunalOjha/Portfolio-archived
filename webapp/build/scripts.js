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
                  })   
        })();
(function()
    {
        'use strict'

        angular
            .module('d3', [])

    })();
(function() 
    {
    
    'use strict'
    
    angular
        .module('webApp')
        .controller('AboutMeController', AboutMeController);
    
    AboutMeController.$inject = ['$scope'];
    
    function AboutMeController($scope) 
        { 
            loadSkillCircles();
            var el = $('.skill-circle'),
                inited = false;

                el.appear({ force_process: true });

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
             "children": [
              {
               "name": "analytics",
               "children": [
                {
                 "name": "cluster",
                 "children": [
                  {"name": "AgglomerativeCluster", "size": 3938},
                  {"name": "CommunityStructure", "size": 3812},
                  {"name": "HierarchicalCluster", "size": 6714},
                  {"name": "MergeEdge", "size": 743}
                 ]
                },
                {
                 "name": "graph",
                 "children": [
                  {"name": "BetweennessCentrality", "size": 3534},
                  {"name": "LinkDistance", "size": 5731},
                  {"name": "MaxFlowMinCut", "size": 7840},
                  {"name": "ShortestPaths", "size": 5914},
                  {"name": "SpanningTree", "size": 3416}
                 ]
                },
                {
                 "name": "optimization",
                 "children": [
                  {"name": "AspectRatioBanker", "size": 7074}
                 ]
                }
               ]
              },
              {
               "name": "animate",
               "children": [
                {"name": "Easing", "size": 17010},
                {"name": "FunctionSequence", "size": 5842},
                {
                 "name": "interpolate",
                 "children": [
                  {"name": "ArrayInterpolator", "size": 1983},
                  {"name": "ColorInterpolator", "size": 2047},
                  {"name": "DateInterpolator", "size": 1375},
                  {"name": "Interpolator", "size": 8746},
                  {"name": "MatrixInterpolator", "size": 2202},
                  {"name": "NumberInterpolator", "size": 1382},
                  {"name": "ObjectInterpolator", "size": 1629},
                  {"name": "PointInterpolator", "size": 1675},
                  {"name": "RectangleInterpolator", "size": 2042}
                 ]
                },
                {"name": "ISchedulable", "size": 1041},
                {"name": "Parallel", "size": 5176},
                {"name": "Pause", "size": 449},
                {"name": "Scheduler", "size": 5593},
                {"name": "Sequence", "size": 5534},
                {"name": "Transition", "size": 9201},
                {"name": "Transitioner", "size": 19975},
                {"name": "TransitionEvent", "size": 1116},
                {"name": "Tween", "size": 6006}
               ]
              },
              {
               "name": "data",
               "children": [
                {
                 "name": "converters",
                 "children": [
                  {"name": "Converters", "size": 721},
                  {"name": "DelimitedTextConverter", "size": 4294},
                  {"name": "GraphMLConverter", "size": 9800},
                  {"name": "IDataConverter", "size": 1314},
                  {"name": "JSONConverter", "size": 2220}
                 ]
                },
                {"name": "DataField", "size": 1759},
                {"name": "DataSchema", "size": 2165},
                {"name": "DataSet", "size": 586},
                {"name": "DataSource", "size": 3331},
                {"name": "DataTable", "size": 772},
                {"name": "DataUtil", "size": 3322}
               ]
              },
              {
               "name": "display",
               "children": [
                {"name": "DirtySprite", "size": 8833},
                {"name": "LineSprite", "size": 1732},
                {"name": "RectSprite", "size": 3623},
                {"name": "TextSprite", "size": 10066}
               ]
              },
              {
               "name": "flex",
               "children": [
                {"name": "FlareVis", "size": 4116}
               ]
              },
              {
               "name": "physics",
               "children": [
                {"name": "DragForce", "size": 1082},
                {"name": "GravityForce", "size": 1336},
                {"name": "IForce", "size": 319},
                {"name": "NBodyForce", "size": 10498},
                {"name": "Particle", "size": 2822},
                {"name": "Simulation", "size": 9983},
                {"name": "Spring", "size": 2213},
                {"name": "SpringForce", "size": 1681}
               ]
              },
              {
               "name": "query",
               "children": [
                {"name": "AggregateExpression", "size": 1616},
                {"name": "And", "size": 1027},
                {"name": "Arithmetic", "size": 3891},
                {"name": "Average", "size": 891},
                {"name": "BinaryExpression", "size": 2893},
                {"name": "Comparison", "size": 5103},
                {"name": "CompositeExpression", "size": 3677},
                {"name": "Count", "size": 781},
                {"name": "DateUtil", "size": 4141},
                {"name": "Distinct", "size": 933},
                {"name": "Expression", "size": 5130},
                {"name": "ExpressionIterator", "size": 3617},
                {"name": "Fn", "size": 3240},
                {"name": "If", "size": 2732},
                {"name": "IsA", "size": 2039},
                {"name": "Literal", "size": 1214},
                {"name": "Match", "size": 3748},
                {"name": "Maximum", "size": 843},
                {
                 "name": "methods",
                 "children": [
                  {"name": "add", "size": 593},
                  {"name": "and", "size": 330},
                  {"name": "average", "size": 287},
                  {"name": "count", "size": 277},
                  {"name": "distinct", "size": 292},
                  {"name": "div", "size": 595},
                  {"name": "eq", "size": 594},
                  {"name": "fn", "size": 460},
                  {"name": "gt", "size": 603},
                  {"name": "gte", "size": 625},
                  {"name": "iff", "size": 748},
                  {"name": "isa", "size": 461},
                  {"name": "lt", "size": 597},
                  {"name": "lte", "size": 619},
                  {"name": "max", "size": 283},
                  {"name": "min", "size": 283},
                  {"name": "mod", "size": 591},
                  {"name": "mul", "size": 603},
                  {"name": "neq", "size": 599},
                  {"name": "not", "size": 386},
                  {"name": "or", "size": 323},
                  {"name": "orderby", "size": 307},
                  {"name": "range", "size": 772},
                  {"name": "select", "size": 296},
                  {"name": "stddev", "size": 363},
                  {"name": "sub", "size": 600},
                  {"name": "sum", "size": 280},
                  {"name": "update", "size": 307},
                  {"name": "variance", "size": 335},
                  {"name": "where", "size": 299},
                  {"name": "xor", "size": 354},
                  {"name": "_", "size": 264}
                 ]
                },
                {"name": "Minimum", "size": 843},
                {"name": "Not", "size": 1554},
                {"name": "Or", "size": 970},
                {"name": "Query", "size": 13896},
                {"name": "Range", "size": 1594},
                {"name": "StringUtil", "size": 4130},
                {"name": "Sum", "size": 791},
                {"name": "Variable", "size": 1124},
                {"name": "Variance", "size": 1876},
                {"name": "Xor", "size": 1101}
               ]
              },
              {
               "name": "scale",
               "children": [
                {"name": "IScaleMap", "size": 2105},
                {"name": "LinearScale", "size": 1316},
                {"name": "LogScale", "size": 3151},
                {"name": "OrdinalScale", "size": 3770},
                {"name": "QuantileScale", "size": 2435},
                {"name": "QuantitativeScale", "size": 4839},
                {"name": "RootScale", "size": 1756},
                {"name": "Scale", "size": 4268},
                {"name": "ScaleType", "size": 1821},
                {"name": "TimeScale", "size": 5833}
               ]
              },
              {
               "name": "util",
               "children": [
                {"name": "Arrays", "size": 8258},
                {"name": "Colors", "size": 10001},
                {"name": "Dates", "size": 8217},
                {"name": "Displays", "size": 12555},
                {"name": "Filter", "size": 2324},
                {"name": "Geometry", "size": 10993},
                {
                 "name": "heap",
                 "children": [
                  {"name": "FibonacciHeap", "size": 9354},
                  {"name": "HeapNode", "size": 1233}
                 ]
                },
                {"name": "IEvaluable", "size": 335},
                {"name": "IPredicate", "size": 383},
                {"name": "IValueProxy", "size": 874},
                {
                 "name": "math",
                 "children": [
                  {"name": "DenseMatrix", "size": 3165},
                  {"name": "IMatrix", "size": 2815},
                  {"name": "SparseMatrix", "size": 3366}
                 ]
                },
                {"name": "Maths", "size": 17705},
                {"name": "Orientation", "size": 1486},
                {
                 "name": "palette",
                 "children": [
                  {"name": "ColorPalette", "size": 6367},
                  {"name": "Palette", "size": 1229},
                  {"name": "ShapePalette", "size": 2059},
                  {"name": "SizePalette", "size": 2291}
                 ]
                },
                {"name": "Property", "size": 5559},
                {"name": "Shapes", "size": 19118},
                {"name": "Sort", "size": 6887},
                {"name": "Stats", "size": 6557},
                {"name": "Strings", "size": 22026}
               ]
              },
              {
               "name": "vis",
               "children": [
                {
                 "name": "axis",
                 "children": [
                  {"name": "Axes", "size": 1302},
                  {"name": "Axis", "size": 24593},
                  {"name": "AxisGridLine", "size": 652},
                  {"name": "AxisLabel", "size": 636},
                  {"name": "CartesianAxes", "size": 6703}
                 ]
                },
                {
                 "name": "controls",
                 "children": [
                  {"name": "AnchorControl", "size": 2138},
                  {"name": "ClickControl", "size": 3824},
                  {"name": "Control", "size": 1353},
                  {"name": "ControlList", "size": 4665},
                  {"name": "DragControl", "size": 2649},
                  {"name": "ExpandControl", "size": 2832},
                  {"name": "HoverControl", "size": 4896},
                  {"name": "IControl", "size": 763},
                  {"name": "PanZoomControl", "size": 5222},
                  {"name": "SelectionControl", "size": 7862},
                  {"name": "TooltipControl", "size": 8435}
                 ]
                },
                {
                 "name": "data",
                 "children": [
                  {"name": "Data", "size": 20544},
                  {"name": "DataList", "size": 19788},
                  {"name": "DataSprite", "size": 10349},
                  {"name": "EdgeSprite", "size": 3301},
                  {"name": "NodeSprite", "size": 19382},
                  {
                   "name": "render",
                   "children": [
                    {"name": "ArrowType", "size": 698},
                    {"name": "EdgeRenderer", "size": 5569},
                    {"name": "IRenderer", "size": 353},
                    {"name": "ShapeRenderer", "size": 2247}
                   ]
                  },
                  {"name": "ScaleBinding", "size": 11275},
                  {"name": "Tree", "size": 7147},
                  {"name": "TreeBuilder", "size": 9930}
                 ]
                },
                {
                 "name": "events",
                 "children": [
                  {"name": "DataEvent", "size": 2313},
                  {"name": "SelectionEvent", "size": 1880},
                  {"name": "TooltipEvent", "size": 1701},
                  {"name": "VisualizationEvent", "size": 1117}
                 ]
                },
                {
                 "name": "legend",
                 "children": [
                  {"name": "Legend", "size": 20859},
                  {"name": "LegendItem", "size": 4614},
                  {"name": "LegendRange", "size": 10530}
                 ]
                },
                {
                 "name": "operator",
                 "children": [
                  {
                   "name": "distortion",
                   "children": [
                    {"name": "BifocalDistortion", "size": 4461},
                    {"name": "Distortion", "size": 6314},
                    {"name": "FisheyeDistortion", "size": 3444}
                   ]
                  },
                  {
                   "name": "encoder",
                   "children": [
                    {"name": "ColorEncoder", "size": 3179},
                    {"name": "Encoder", "size": 4060},
                    {"name": "PropertyEncoder", "size": 4138},
                    {"name": "ShapeEncoder", "size": 1690},
                    {"name": "SizeEncoder", "size": 1830}
                   ]
                  },
                  {
                   "name": "filter",
                   "children": [
                    {"name": "FisheyeTreeFilter", "size": 5219},
                    {"name": "GraphDistanceFilter", "size": 3165},
                    {"name": "VisibilityFilter", "size": 3509}
                   ]
                  },
                  {"name": "IOperator", "size": 1286},
                  {
                   "name": "label",
                   "children": [
                    {"name": "Labeler", "size": 9956},
                    {"name": "RadialLabeler", "size": 3899},
                    {"name": "StackedAreaLabeler", "size": 3202}
                   ]
                  },
                  {
                   "name": "layout",
                   "children": [
                    {"name": "AxisLayout", "size": 6725},
                    {"name": "BundledEdgeRouter", "size": 3727},
                    {"name": "CircleLayout", "size": 9317},
                    {"name": "CirclePackingLayout", "size": 12003},
                    {"name": "DendrogramLayout", "size": 4853},
                    {"name": "ForceDirectedLayout", "size": 8411},
                    {"name": "IcicleTreeLayout", "size": 4864},
                    {"name": "IndentedTreeLayout", "size": 3174},
                    {"name": "Layout", "size": 7881},
                    {"name": "NodeLinkTreeLayout", "size": 12870},
                    {"name": "PieLayout", "size": 2728},
                    {"name": "RadialTreeLayout", "size": 12348},
                    {"name": "RandomLayout", "size": 870},
                    {"name": "StackedAreaLayout", "size": 9121},
                    {"name": "TreeMapLayout", "size": 9191}
                   ]
                  },
                  {"name": "Operator", "size": 2490},
                  {"name": "OperatorList", "size": 5248},
                  {"name": "OperatorSequence", "size": 4190},
                  {"name": "OperatorSwitch", "size": 2581},
                  {"name": "SortOperator", "size": 2023}
                 ]
                },
                {"name": "Visualization", "size": 16540}
               ]
              }
             ]
            };
        }
 })();
(function blogController() 
    {
    
    'use strict'
    
    angular
        .module('webApp')
        .controller('BlogController', BlogController)
        .controller('CommentController', CommentController)
    
    BlogController.$inject = ['$http'];
    
    function BlogController($http) 
        {   
            var blog = this;
            
            blog.title = "AngularJS Blog App";

            blog.posts = {};
            $http.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/posts_1.json').success(function(data){
            
              blog.posts = data;
            });

            blog.tab = 'blog';

            blog.selectTab = function(setTab){
              blog.tab = setTab;
              console.log(blog.tab)
            };

            blog.isSelected = function(checkTab){
              return blog.tab === checkTab;
            };

            blog.post = {};
            blog.addPost = function(){
              blog.post.createdOn = Date.now();
              blog.post.comments = [];
              blog.post.likes = 0;
              blog.posts.unshift(this.post);
              blog.tab = 0;
              blog.post ={};
            };
            
        }
    
    function CommentController()
        {
        this.comment = {};
        this.addComment = function(post){
          this.comment.createdOn = Date.now();
          post.comments.push(this.comment);
          this.comment ={};
        };
      };
    
 })() 
(function commentController() 
    {
    
    'use strict'
    
    angular
        .module('webApp')
        .controller('CommentController', CommentController);
    
    CommentController.$inject = [];
    
    function CommentController() 
        {
        this.comment = {};
        this.addComment = function(post){
        this.comment.createdOn = Date.now();
        post.comments.push(this.comment);
        this.comment ={};
    };
  }
        
    
 })(); 
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
(function homeController() 
    {
    
    'use strict'
    
    angular
        .module('webApp')
        .controller('HomeController', HomeController);
    
    HomeController.$inject = [];
    
    function HomeController($scope, $location, $anchorScroll) 
        {
         $(document).ready(function() {
				$("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering(); 
			})
        }
 })() 
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
(function workHistoryController() 
    {
    
    'use strict'
    
    angular
        .module('webApp')
        .controller('WorkHistoryController', WorkHistoryController);
    
    WorkHistoryController.$inject = [];
    
    function WorkHistoryController() 
        {
            jQuery(document).ready(function($){
                var timelineBlocks = $('.cd-timeline-block'),
                    offset = 0.8;

                //hide timeline blocks which are outside the viewport
                hideBlocks(timelineBlocks, offset);

                //on scolling, show/animate timeline blocks when enter the viewport
                $(window).on('scroll', function(){
                    (!window.requestAnimationFrame) 
                        ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
                        : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
                });

                function hideBlocks(blocks, offset) {
                    blocks.each(function(){
                        ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
                    });
                }

                function showBlocks(blocks, offset) {
                    blocks.each(function(){
                        ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
                    });
                }
            });
        }
    
 })() 
(function()
{
	'use strict';
  
	angular
		.module('webApp')
		.directive('aboutMe', aboutMe);
    
	function aboutMe()
	{
		var directive = 
            {
                restrict: 'E',
                controller: 'AboutMeController',
                controllerAs: 'aboutMe',
                scope: {},
                templateUrl: './views/aboutMe.html'
            };
        
		return directive;

	}
})();
(function()
{
	'use strict';
  
	angular
		.module('webApp')
		.directive('blog', blog);
    
	function blog()
	{
		var directive = 
            {
                restrict: 'E',
                controller: 'BlogController',
                controllerAs: 'blog',
                scope: {},
                templateUrl: './views/blog.html'
            };
        
		return directive;

	}
})();
(function()
{
	'use strict';
  
	angular
		.module('webApp')
		.directive('contactMe', contactMe);
    
	function contactMe()
	{
        var directive = 
            {
                restrict: 'E',
                controller: 'ContactMeController',
                scope: {},
                templateUrl: './views/contactMe.html'
            };
        
		return directive;

	}
})();
(function()
{
	'use strict';
  
	angular
		.module('webApp')
		.directive('home', home);
    
	function home()
	{
		var directive = 
            {
                restrict: 'E',
                controller: 'HomeController',
                scope: {},
                templateUrl: './views/home.html'
            };
        
		return directive;

	}
})();
(function()
{
	'use strict';
  
	angular
		.module('webApp')
		.directive('mainNavbar', mainNavbar);
    
	function mainNavbar()
	{
        var directive = 
            {
                restrict: 'E',
                controller: 'MainController',
                scope: {},
                templateUrl: './views/mainNavbar.html'
            };
        
		return directive;

	}
})();
(function()
{
	'use strict';
  
	angular
		.module('webApp')
		.directive('techExperience', techExperience);
    
	function techExperience()
	{
		var directive = 
            {
                restrict: 'E',
                //controller: 'WorkHistoryController',
                //controllerAs: 'workhistory',
                scope: {data: '=treeData'},
                template: "<div style='width:100%'></div>",
                link: techExperienceLink,
            };
        
		return directive;
	}
    
    function techExperienceLink(scope, el, attr/*, attrs, ctrl, tfn*/) 
    {
        var values = scope.data;

        var div = d3.select("body")
            .append("div") // declare the tooltip div
            .attr("class", "tooltip")
            .style("opacity", 0);

        var margin = { top: 20, right: 120, bottom: 20, left: 120 },
            width = 960 - margin.right - margin.left,
            height = 400 - margin.top - margin.bottom;
        var i = 0,duration = 750,root,select2_data;
        var diameter = 960;
        var tree = d3.layout.tree()
            .size([height, width]);

        var diagonal = d3.svg.diagonal()
            .projection(function (d) { return [d.y, d.x]; });

        var svg = d3.select(el[0]).append("svg")
            .attr("id", "treeChart")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        //recursively collapse children
        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }

        // Toggle children on click.
        function click(d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            }
            else {
                d.children = d._children;
                d._children = null;
            }
            update(d);
        }

        function openPaths(paths) {
            for (var i = 0; i < paths.length; i++) {
                if (paths[i].id !== "1") {//i.e. not root
                    paths[i].class = 'found';
                    if (paths[i]._children) { //if children are hidden: open them, otherwise: don't do anything
                        paths[i].children = paths[i]._children;
                        paths[i]._children = null;
                    }
                    update(paths[i]);
                }
            }
        }

        root = values;
        //values is the flare.json 
        select2_data = extract_select2_data(values, [], 0)[1];//I know, not the prettiest...
        root.x0 = height / 2;
        root.y0 = 0;
        root.children.forEach(collapse);
        update(root);
        //init search box
       $("#search").select2({
         data: select2_data,
         containerCssClass: "search"
        });

        //attach search box listener
        $("#search").on("select2-selecting", function(e) {
            var paths = searchTree(root, e.object.text, []);
            if (typeof (paths) !== "undefined") {
                openPaths(paths);
            } else {
                alert(e.object.text + " not found!");
            }
        });

        d3.select(self.frameElement).style("height", "800px");

        function update(source) {
            // Compute the new tree layout.
            var nodes = tree.nodes(root).reverse(),
            links = tree.links(nodes);

            // Normalize for fixed-depth.
            nodes.forEach(function (d) { d.y = d.depth * 180; });

            // Update the nodesâ€¦
            var node = svg.selectAll("g.node")
                .data(nodes, function (d) { return d.id || (d.id = ++i); });

            // Enter any new nodes at the parent's previous position.
            var nodeEnter = node.enter().append("g")
                .attr("class", "node")
            .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
            .on("click", click);

            nodeEnter.append("circle")
            .attr("r", 1e-6)
            .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

            nodeEnter.append("text")
                .attr("x", function (d) { return d.children || d._children ? -10 : 12; })
                .attr("dy", ".35em")
                .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
                .text(function (d) { return d.name; })
                .style("fill-opacity", 1e-6);

            // Transition nodes to their new position.
            var nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

            nodeUpdate.select("circle")
                .attr("r", 4.5)
                .style("fill", function (d) {
                    if (d.class === "found") {
                        return "#ff4136"; //red
                    }
                    else if (d._children) {
                        return "lightsteelblue";
                    }
                    else {
                        return "#fff";
                    }
                })
                .style("stroke", function (d) {
                    if (d.class === "found") {
                        return "#ff4136"; //red
                    }
                });

            nodeUpdate.select("text")
                .style("fill-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
                .remove();

            nodeExit.select("circle")
                .attr("r", 1e-6);

            nodeExit.select("text")
                .style("fill-opacity", 1e-6);

            // Update the linksâ€¦
            var link = svg.selectAll("path.link")
                .data(links, function (d) { return d.target.id; });

            // Enter any new links at the parent's previous position.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("d", function (d) {
                    var o = { x: source.x0, y: source.y0 };
                    return diagonal({ source: o, target: o });
                });

            // Transition links to their new position.
            link.transition()
                .duration(duration)
                .attr("d", diagonal)
                .style("stroke", function (d) {
                    if (d.target.class === "found") {
                        return "#ff4136";
                    }
                });

            // Transition exiting nodes to the parent's new position.
            link.exit().transition()
                .duration(duration)
                .attr("d", function (d) {
                    var o = { x: source.x, y: source.y };
                    return diagonal({ source: o, target: o });
                })
                .remove();

            // Stash the old positions for transition.
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
        }

        function searchTree(obj, search, path) {
            if (obj.name === search) { //if search is found return, add the object to the path and return it
                path.push(obj);
                return path;
            }
            else if (obj.children || obj._children) { //if children are collapsed d3 object will have them instantiated as _children
                var children = (obj.children) ? obj.children : obj._children;
                for (var i = 0; i < children.length; i++) {
                    path.push(obj);// we assume this path is the right one
                    var found = searchTree(children[i], search, path);
                    if (found) {// we were right, this should return the bubbled-up path from the first if statement
                        return found;
                    }
                    else {//we were wrong, remove this parent from the path and continue iterating
                        path.pop();
                    }
                }
            }
            else {//not the right object, return false so it will continue to iterate in the loop
                return false;
            }
        }

        function extract_select2_data(node, leaves, index) {
            if (node.children) {
                for (var i = 0; i < node.children.length; i++) {
                    index = extract_select2_data(node.children[i], leaves, index)[0];
                }
            }
            else {
                leaves.push({ id: ++index, text: node.name });
            }
            return [index, leaves];
        }

     } 
})();
!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var propertiesMeta=require("./properties-meta.js");module.exports=function($scope,b5){for(var i=0;i<propertiesMeta.length;i++){var meta=propertiesMeta[i];$scope.$watch(meta.norm,$.proxy(function(propMeta,value){if("undefined"!=typeof value){var update={};update[propMeta.name]=value,b5.theta_carousel(update)}},this,meta)),$scope.$watch("selectedIndex",$.proxy(function(propMeta,value){"undefined"!=typeof value&&value!==b5.theta_carousel("option","selectedIndex")&&b5.theta_carousel({selectedIndex:value})},this,meta))}}},{"./properties-meta.js":2}],2:[function(require,module,exports){function convertNormToAttributeName(val){return val.replace(/([A-Z])/g,"-$1").toLowerCase()}for(var meta=[{name:"filter"},{name:"distance"},{name:"numberOfElementsToDisplayRight"},{name:"numberOfElementsToDisplayLeft"},{name:"enabled"},{name:"designedForWidth"},{name:"designedForHeight"},{name:"fallback"},{name:"distanceInFallbackMode"},{name:"scaleX"},{name:"scaleY"},{name:"scaleZ"},{name:"path.settings.shiftX",norm:"pathSettingsShiftX"},{name:"path.settings.shiftY",norm:"pathSettingsShiftY"},{name:"path.settings.shiftZ",norm:"pathSettingsShiftZ"},{name:"path.settings.rotationAngleXY",norm:"pathSettingsRotationAngleXY"},{name:"path.settings.rotationAngleZY",norm:"pathSettingsRotationAngleZY"},{name:"path.settings.rotationAngleZX",norm:"pathSettingsRotationAngleZX"},{name:"path.settings.rotateElements",norm:"pathSettingsRotateElements"},{name:"perspective"},{name:"mode3D"},{name:"rotationAnimationEasing"},{name:"rotationAnimationDuration"},{name:"sensitivity"},{name:"minKeyDownFrequency"},{name:"verticalRotation"},{name:"mousewheelEnabled"},{name:"keyboardEnabled"},{name:"gesturesEnabled"},{name:"inertiaFriction"},{name:"inertiaHighFriction"},{name:"autorotation"},{name:"autorotationDirection"},{name:"autorotationPause"},{name:"path.type",norm:"pathType"},{name:"path.settings.endless",norm:"pathSettingsEndless"},{name:"path.settings.wideness",norm:"pathSettingsWideness"},{name:"path.settings.fi",norm:"pathSettingsFi"},{name:"path.settings.flatness",norm:"pathSettingsFlatness"},{name:"path.settings.a",norm:"pathSettingsA"},{name:"path.settings.b",norm:"pathSettingsB"},{name:"path.settings.pathLength",norm:"pathSettingsPathLength"},{name:"path.settings.zeroPosition",norm:"pathSettingsZeroPosition"},{name:"path.settings.width",norm:"pathSettingsWidth"},{name:"path.settings.height",norm:"pathSettingsHeight"},{name:"path.settings.xyPathBezierPoints",norm:"pathSettingsXYPathBezierPoints"},{name:"path.settings.xzPathBezierPoints",norm:"pathSettingsXZPathBezierPoints"},{name:"path.settings.depth",norm:"pathSettingsDepth"},{name:"path.settings.xyArcLengthBezierPoints",norm:"pathSettingsXYArcLengthBezierPoints"},{name:"allignElementsWithPath"},{name:"allignElementsWithPathCoefficient"},{name:"shadow"},{name:"shadowBlurRadius"},{name:"shadowSpreadRadius"},{name:"fadeAway"},{name:"fadeAwayNumberOfConfigurableElements"},{name:"fadeAwayBezierPoints"},{name:"rotation"},{name:"rotationNumberOfConfigurableElements"},{name:"rotationBezierPoints"},{name:"rotationVectorX"},{name:"rotationVectorY"},{name:"rotationVectorZ"},{name:"rotationInvertForNegative"},{name:"sizeAdjustment"},{name:"sizeAdjustmentNumberOfConfigurableElements"},{name:"sizeAdjustmentBezierPoints"},{name:"popoutSelected"},{name:"popoutSelectedShiftX"},{name:"popoutSelectedShiftY"},{name:"popoutSelectedShiftZ"},{name:"reflection"},{name:"reflectionBelow"},{name:"reflectionHeight"}],i=0;i<meta.length;i++){var item=meta[i];item.norm=item.norm?item.norm:item.name,item.attribute=convertNormToAttributeName(item.norm)}module.exports=meta},{}],3:[function(require,module,exports){require("./../../../carousel/JSSources/CarouselControl/carousel.js"),angular.module("theta",[]).directive("thetaCrousel",function($timeout){function link($scope,b5,$attrs){b5=$(b5),b5.theta_carousel().on("change",function(e,data){$timeout(function(){$scope.$apply(function(){$scope.selectedIndex=data.index,$scope.change({index:data.index})})},0)}).on("motionStart",function(e,data){$timeout(function(){$scope.$apply(function(){$scope.motionStart({index:data.index})})},0)}).on("motionEnd",function(e,data){$timeout(function(){$scope.$apply(function(){$scope.motionEnd({index:data.index})})},0)}),bindToAttributes($scope,b5),$scope.$watchCollection("model",function(){$timeout(function(){b5.theta_carousel("update")})})}for(var propertiesMeta=require("./properties-meta.js"),bindToAttributes=require("./bind-to-tag-attributes.js"),scope={model:"=ngModel",change:"&",motionStart:"&",motionEnd:"&",selectedIndex:"="},i=0;i<propertiesMeta.length;i++){var meta=propertiesMeta[i];scope[meta.norm]="="}return{scope:scope,template:"<div ng-transclude></div>",replace:!0,transclude:!0,restrict:"E",link:link}})},{"./../../../carousel/JSSources/CarouselControl/carousel.js":15,"./bind-to-tag-attributes.js":1,"./properties-meta.js":2}],4:[function(require,module,exports){module.exports=function(carousel,settings){var W=require("./W.js"),vector=require("./../e7.js"),rotation=require("./../h1.js"),base=new W(carousel,{});this.k5=new vector,this.k5.x=1,this.k3=new vector,this.k3.y=1,$.extend(this,base),$.extend(this.settings,settings),this.apply=function(elementTransform,element,value){var currentPoint=this.e1.path.getPoint(value),directionPoint=this.e1.path.getPoint(value+.1),direction=new vector;direction.e7(currentPoint,directionPoint);var angle=direction.angle(this.k5);angle*=this.e1.options.allignElementsWithPathCoefficient,elementTransform.rotations.push(new rotation(this.k3,angle))}}},{"./../h1.js":33,"./../e7.js":38,"./W.js":5}],5:[function(require,module,exports){module.exports=function(carousel,settings){this.e1=carousel,this.applyPhase="positioning",this.settings={},$.extend(this.settings,settings),this.Q=function(){return 0},this.apply=function(elementTransform,element,value){},this.revert=function(){}}},{}],6:[function(require,module,exports){module.exports=function(carousel,settings){var W=require("./W.js"),getBezier=require("./../b4.js"),base=new W(carousel,{});$.extend(this,base),$.extend(this.settings,settings),this.apply=function(elementTransform,element,value){var root=this.e1.path.a2(),distance=Math.abs(value-root),absDist=this.e1.options.distance*this.e1.options.fadeAwayNumberOfConfigurableElements,bezierT=1-Math.min(distance/absDist,1),Cs=this.e1.options.fadeAwayBezierPoints,opacity=getBezier(bezierT,Cs.p1,Cs.p2,Cs.p3,Cs.p4).y;element.b5.css({opacity:opacity/100})}}},{"./../b4.js":13,"./W.js":5}],7:[function(require,module,exports){module.exports=function(carousel,settings){var W=require("./W.js"),base=new W(carousel,{});$.extend(this,base),$.extend(this.settings,settings),this.apply=function(elementTransform,element,value){var distFromRoot=Math.abs(value-this.e1.path.a2()),coef=1-distFromRoot/this.e1.options.distance;coef=Math.max(coef,0),elementTransform.translateX+=this.e1.options.popoutSelectedShiftX*coef,elementTransform.translateY+=this.e1.options.popoutSelectedShiftY*coef,elementTransform.translateZ+=this.e1.options.popoutSelectedShiftZ*coef}}},{"./W.js":5}],8:[function(require,module,exports){module.exports=function(carousel,settings){var W=require("./W.js"),base=new W(carousel,{});$.extend(this,base),$.extend(this.settings,settings),this.apply=function(elementTransform,element,value){element.isReflectionApplied||(element.isReflectionApplied=!0,element.b5.css("box-reflect","below "+this.e1.options.reflectionBelow+"px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop("+(1-this.e1.options.reflectionHeight)+", transparent), to(black))"))},this.revert=function(){for(var i=0;i<this.e1.a2.length;i++)this.e1.a2[i].isReflectionApplied=!1,this.e1.a2[i].b5.css("box-reflect","")}}},{"./W.js":5}],9:[function(require,module,exports){module.exports=function(carousel,settings){var W=require("./W.js"),getBezier=require("./../b4.js"),vector=require("./../e7.js"),rotation=require("./../h1.js"),base=new W(carousel,{});$.extend(this,base),$.extend(this.settings,settings),this.apply=function(elementTransform,element,value){var root=this.e1.path.a2(),distance=Math.abs(value-root),absDist=this.e1.options.distance*this.e1.options.rotationNumberOfConfigurableElements,bezierT=1-Math.min(distance/absDist,1),Cs=this.e1.options.rotationBezierPoints,angle=getBezier(bezierT,Cs.p1,Cs.p2,Cs.p3,Cs.p4).y;value<root&&this.e1.options.rotationInvertForNegative&&(angle*=-1);var rotationVector=new vector;rotationVector.x=this.e1.options.rotationVectorX,rotationVector.y=this.e1.options.rotationVectorY,rotationVector.z=this.e1.options.rotationVectorZ,elementTransform.rotations.push(new rotation(rotationVector,angle))}}},{"./../b4.js":13,"./../h1.js":33,"./../e7.js":38,"./W.js":5}],10:[function(require,module,exports){module.exports=function(carousel,settings){var W=require("./W.js"),base=new W(carousel,{});$.extend(this,base),$.extend(this.settings,settings),this.apply=function(elementTransform,element,value){var boxShadow="0px 0px "+this.e1.options.shadowBlurRadius+"px "+this.e1.options.shadowSpreadRadius+"px #000000";element.b5.css({"-webkit-box-shadow":boxShadow,"-moz-box-shadow":boxShadow,"box-shadow":boxShadow})},this.revert=function(){for(var i=0;i<this.e1.a2.length;i++)this.e1.a2[i].b5.css({"-webkit-box-shadow":"","-moz-box-shadow":"","box-shadow":""})}}},{"./W.js":5}],11:[function(require,module,exports){module.exports=function(carousel,settings){var W=require("./W.js"),getBezier=require("./../b4.js"),base=new W(carousel,{});$.extend(this,base),$.extend(this.settings,settings),this.apply=function(elementTransform,element,value){var root=this.e1.path.a2(),distance=Math.abs(value-root),absDist=this.e1.options.distance*this.e1.options.sizeAdjustmentNumberOfConfigurableElements,bezierT=1-Math.min(distance/absDist,1),Cs=this.e1.options.sizeAdjustmentBezierPoints,scale=getBezier(bezierT,Cs.p1,Cs.p2,Cs.p3,Cs.p4).y;elementTransform.scale=scale/100}}},{"./../b4.js":13,"./W.js":5}],12:[function(require,module,exports){function extend(obj){obj.Qz4=function(){this.e1.options.autorotation?this.Qz5():(this.autorotationStarted=!1,this.autorotationTimer&&clearTimeout(this.autorotationTimer))},obj.Qz5=function(){this.autorotationStarted||(this.autorotationStarted=!!this.move())},obj.move=$.proxy(function(){return"left"==this.e1.options.autorotationDirection?this.e1.moveBack():"right"==this.e1.options.autorotationDirection?this.e1.moveForward():void 0},obj),obj.onMotionEnd=$.proxy(function(){this.autorotationStarted&&(this.autorotationTimer=setTimeout(this.move,this.e1.options.autorotationPause))},obj),obj.destroy=function(){this.e1.widget().off("motionEnd",this.onMotionEnd)}}module.exports=function(carousel){this.autorotationStarted=!1,this.e1=carousel,this.autorotationTimer=null,extend(this),this.e1.widget().on("motionEnd",this.onMotionEnd),this.Qz4()}},{}],13:[function(require,module,exports){function b1(t){return t*t*t}function b2(t){return 3*t*t*(1-t)}function b3(t){return 3*t*(1-t)*(1-t)}function b4(t){return(1-t)*(1-t)*(1-t)}module.exports=function(t,p1,cp1,cp2,p2){var pos={x:0,y:0};return pos.x=p1.x*b1(t)+cp1.x*b2(t)+cp2.x*b3(t)+p2.x*b4(t),pos.y=p1.y*b1(t)+cp1.y*b2(t)+cp2.y*b3(t)+p2.y*b4(t),pos}},{}],14:[function(require,module,exports){function getBezierBox(p1,cp1,cp2,p2){for(var C=getBezier(0,p1,cp1,cp2,p2),minX=C.x,minY=C.y,maxX=C.x,maxY=C.y,i=0;i<=20;i++){var tempPoint=getBezier(.05*i,p1,cp1,cp2,p2);minX=Math.min(tempPoint.x,minX),minY=Math.min(tempPoint.y,minY),maxX=Math.max(tempPoint.x,maxX),maxY=Math.max(tempPoint.y,maxY)}return{minX:minX,minY:minY,maxX:maxX,maxY:maxY,width:maxX-minX,height:maxY-minY}}var getBezier=require("./b4.js"),bezierBoxCache=[];module.exports=function(p1,cp1,cp2,p2){var key=p1.x+"."+p1.y+"."+cp1.x+"."+cp1.y+"."+cp2.x+"."+cp2.y+"."+p2.x+"."+p2.y;return"undefined"==typeof bezierBoxCache[key]&&(bezierBoxCache[key]=getBezierBox(p1,cp1,cp2,p2)),bezierBoxCache[key]}},{"./b4.js":13}],15:[function(require,module,exports){require("./b3.js")(),function($){$.theta||($.theta=new Object);var b2=require("./b2.js"),b6=require("./b6.js"),c1=require("./c1.js"),b5=require("./b5.js"),b9=require("./b9.js"),rotation_logic_controller=require("./rotation_logic_controller.js"),endless_rotation_logic_controller=require("./endless_rotation_logic_controller.js"),Qwq=require("./Qwq.js"),Qz3=require("./Qz3.js"),size=require("./e6"),utils=require("./e4.js"),a5=require("./paths/a5.js"),a9=require("./paths/a9.js"),a6=require("./paths/a6.js"),a7=require("./paths/a7.js"),a8=require("./paths/a8.js"),e5=require("./paths/e5.js"),b7=require("./a1/b7.js"),b8=require("./a1/b8.js"),a2=require("./a1/a2.js"),a3=require("./a1/a3.js"),a4=require("./a1/a4.js"),e2=require("./a1/e2.js"),effect_reflection=require("./a1/effect_reflection.js"),version="1.6.4",defaultOptions={filter:"div",selectedIndex:0,distance:70,mode3D:"z",scaleX:1,scaleY:1,scaleZ:1,perspective:1e3,numberOfElementsToDisplayRight:null,numberOfElementsToDisplayLeft:null,sensitivity:1,verticalRotation:!1,minKeyDownFrequency:0,rotationAnimationEasing:"easeOutCubic",rotationAnimationDuration:500,inertiaFriction:10,inertiaHighFriction:50,path:{type:"parabola",settings:{}},designedForWidth:null,designedForHeight:null,enabled:!0,mousewheelEnabled:!0,keyboardEnabled:!0,gesturesEnabled:!0,autorotation:!1,autorotationDirection:"right",autorotationPause:0,allignElementsWithPath:!1,allignElementsWithPathCoefficient:1,fadeAway:!1,fadeAwayNumberOfConfigurableElements:5,fadeAwayBezierPoints:{p1:{x:0,y:100},p2:{x:50,y:50},p3:{x:50,y:50},p4:{x:100,y:0}},rotation:!1,rotationVectorX:0,rotationVectorY:0,rotationVectorZ:0,rotationNumberOfConfigurableElements:5,rotationBezierPoints:{p1:{x:0,y:0},p2:{x:50,y:0},p3:{x:50,y:0},p4:{x:100,y:0}},rotationInvertForNegative:!1,sizeAdjustment:!1,sizeAdjustmentNumberOfConfigurableElements:5,sizeAdjustmentBezierPoints:{p1:{x:0,y:100},p2:{x:50,y:100},p3:{x:50,y:100},p4:{x:100,y:100}},shadow:!1,shadowBlurRadius:100,shadowSpreadRadius:0,popoutSelected:!1,popoutSelectedShiftX:0,popoutSelectedShiftY:0,popoutSelectedShiftZ:0,reflection:!1,reflectionBelow:0,reflectionHeight:.3,fallback:"auto",distanceInFallbackMode:200};$.theta.carousel=function(domElement,options){var carousel=this;carousel.b5=$(domElement),carousel.b5.data("theta.carousel",carousel),carousel.b5.addClass("theta-carousel"),carousel._create=function(){this.options=$.extend(!0,{},$.theta.carousel.defaultOptions,options);var containerSize=new size(this.widget().width(),this.widget().height());this.e6=$('<div class="theta-carousel-inner-container"></div>'),this.e6.appendTo(this.widget()),this.e6.css({width:containerSize.width+"px",height:containerSize.height+"px"}),this.widget().attr("tabindex",0).css({outline:"none",overflow:"hidden"}),this.e6.css({transformStyle:"preserve-3d",overflow:"hidden",perspective:this.options.perspective+"px",transform:"translate3d(0px,0px, 100000px)"}),this.update(),this.h4=[],this.g1(),this.g2(),this._createRotationLogicController(),this.b2=new c1(this),this.c3=new b6(this),this.b7(),this.f1=new b2(this),this._a3=new b9(this,$.proxy(this._k7,this)),this.c2=new b5(this),this.autoRotator=new Qz3(this),$(this.f1).on("step",$.proxy(function(e,shift){this.b7(shift)},this)),$(this.f1).on("done",$.proxy(function(e,value){this.e3(value),this.h2()},this)),$(this._a3).on("end",$.proxy(function(e,value){this.q8(value)},this)),$(this._a3).on("start",$.proxy(this.e2,this)),this.initialized=!0},carousel.destroy=function(){for(var i=0;i<this.h4.length;i++)this.h4[i].revert();null!=this.q1&&this.q1.destroy(),this.c2.destroy(),this.c3.destroy(),this.b2.destroy(),this.autoRotator.destroy();for(var i=0;i<this.a2.length;i++)this.a2[i].b5.off("tap",this.moveTo),this.a2[i].b5.off("click",this.moveTo);this.widget().data("theta.carousel",null)},carousel.moveBack=function(){return this.q1.moveBack()},carousel.moveForward=function(){return this.q1.moveForward()},carousel.moveTo=function(index){this.q1.moveTo(index)},carousel.invalidate=function(){this.b8||this.b7()},carousel.update=function(){var itemsToAdd=this.widget().contents().filter(function(){return!(8!=this.nodeType&&$(this).hasClass("theta-ignore")||$(this).hasClass("theta-carousel-inner-container"))});itemsToAdd.appendTo(this.e6),this.a2=this.e6.children().filter(this.options.filter).map(function(i,e){var $e=$(e),order=$e.data("theta-order");return order||(order=i),{b5:$e,element:e,order:order}}).toArray(),this.a2.sort(function(e1,e2){return e1.order-e2.order});for(var i=0;i<this.a2.length;i++)this.a2[i].index=i,this.a2[i].element.index=i,this.a2[i].b5.hasClass("theta-carousel-element")||(this.a2[i].b5.addClass("theta-carousel-element"),this.a2[i].b5.css({position:"absolute"}),this.a2[i].b5.on("tap",$.proxy(this.moveTo,this,i)),this.a2[i].b5.click($.proxy(function(e){this.options.enabled&&!this.options.autorotation&&this.moveTo(e.index)},this,this.a2[i].element)));this.options.selectedIndex=Math.max(Math.min(this.options.selectedIndex,this.a2.length-1),0),0==this.a2.length&&(this.options.selectedIndex=-1),this.initialized&&(this.b2.update(),this.invalidate()),this.l1()},carousel.getIsInMotion=function(){return this.b8},carousel.getIsFallbackMode=function(){return this.q1.wwa()},carousel.widget=function(){return this.b5},carousel._setOption=function(name,value){utils.e5(carousel.options,name,value),"rotationAnimationDuration"!==name&&"rotationAnimationEasing"!==name&&("filter"===name&&this.update(),"perspective"===name&&(this.e6.css({perspective:value+"px"}),"scale"==this.options.mode3D&&this.b7()),0!=name.indexOf("path")&&"fallback"!==name||(this.g1(),this._createRotationLogicController(),this.b7()),"selectedIndex"!==name&&"distance"!==name&&"mode3D"!==name&&"numberOfElementsToDisplayRight"!==name&&"numberOfElementsToDisplayLeft"!==name&&"scaleX"!==name&&"scaleY"!==name&&"scaleZ"!==name&&"allignElementsWithPathCoefficient"!==name&&"fadeAwayBezierPoints"!==name&&"fadeAwayNumberOfConfigurableElements"!==name&&"rotationBezierPoints"!==name&&"rotationNumberOfConfigurableElements"!==name&&"rotationInvertForNegative"!==name&&"rotationVectorX"!==name&&"rotationVectorY"!==name&&"rotationVectorZ"!==name&&"sizeAdjustmentNumberOfConfigurableElements"!==name&&"sizeAdjustmentBezierPoints"!==name&&"shadowBlurRadius"!==name&&"shadowSpreadRadius"!==name&&"popoutSelectedShiftX"!==name&&"popoutSelectedShiftY"!==name&&"popoutSelectedShiftZ"!==name&&"distanceInFallbackMode"!==name||this.b7(),name.indexOf("autorotation")!=-1&&this.autoRotator.Qz4(),name.indexOf("allignElementsWithPath")==-1&&name.indexOf("fadeAway")==-1&&name.indexOf("rotation")==-1&&name.indexOf("sizeAdjustment")==-1&&name.indexOf("shadow")==-1&&name.indexOf("popoutSelected")==-1&&name.indexOf("reflection")==-1||(this.g2(),this.b7()),"selectedIndex"===name&&this.l1())},carousel._createRotationLogicController=function(){null!=this.q1&&this.q1.destroy(),this.path.isEndless()?this.q1=new endless_rotation_logic_controller(this):this.q1=new rotation_logic_controller(this),("always"==this.options.fallback||"auto"==this.options.fallback&&Qwq.fallback())&&(this.q1=new Qwq(this,this.q1)),this.autoRotator&&this.autoRotator.Qz4()},carousel.g2=function(){for(var i=0;i<this.h4.length;i++)this.h4[i].revert();this.h4=[],this.options.allignElementsWithPath&&this.h4.push(new b7(this,{})),this.options.fadeAway&&this.h4.push(new b8(this,{})),this.options.rotation&&this.h4.push(new a3(this,{})),this.options.sizeAdjustment&&this.h4.push(new e2(this,{})),this.options.shadow&&this.h4.push(new a4(this,{})),this.options.popoutSelected&&this.h4.push(new a2(this,{})),this.options.reflection&&this.h4.push(new effect_reflection(this,{}))},carousel.g1=function(){var newPath=null;if("parabola"==this.options.path.type&&(newPath=new e5(this,this.options.path.settings)),"line"==this.options.path.type&&(newPath=new a8(this,this.options.path.settings)),"cubic"==this.options.path.type&&(newPath=new a9(this,this.options.path.settings)),"archimedes_spiral"==this.options.path.type&&(newPath=new a5(this,this.options.path.settings)),"ellipse"==this.options.path.type&&(newPath=new a7(this,this.options.path.settings)),"cubic_bezier"==this.options.path.type&&(newPath=new a6(this,this.options.path.settings)),null==newPath)throw"path "+this.options.path.type+" is not supported.";this.path=newPath,this.options.path.settings=this.path.settings},carousel.k8=function(){this.widget().trigger("change",{index:this.options.selectedIndex}),this.l1()},carousel.l1=function(){for(var i=0;i<this.a2.length;i++)i===this.options.selectedIndex?this.a2[i].b5.addClass("theta-current-item"):this.a2[i].b5.removeClass("theta-current-item")},carousel.e2=function(){this.b8=!0,this.widget().addClass("theta-in-motion"),this.widget().trigger("motionStart",{index:this.options.selectedIndex})},carousel.h2=function(){this.c2.h3(!1),this.widget().removeClass("theta-in-motion"),this.b8=!1,this.widget().trigger("motionEnd",{index:this.options.selectedIndex})},carousel.e3=function(index){this.options.selectedIndex!=index&&(this.options.selectedIndex=index,this.k8()),this.b7()},carousel._k7=function(distance){return this.q1.consumeMotion(distance)},carousel.q8=function(remainingDistance){this.q1.handleMotionEnd(remainingDistance)},carousel.b7=function(animationShift){return this.q1.alignElements(animationShift)},carousel.b9=function(){var container=$(".theta-carousel-inner-container",this.widget());return new size(container.width(),container.height())},carousel._create()},$.theta.carousel.defaultOptions=defaultOptions,$.theta.carousel.version=version,$.fn.theta_carousel=function(options){var callArguments=arguments,hasCallRes=!1,callRes=null,eachRes=this.each(function(){var $el=$(this),instance=$el.data("theta.carousel");if(instance)if("string"==typeof options){if("function"==typeof instance[options]){var args=Array.prototype.slice.call(callArguments,1);hasCallRes=!0,callRes=instance[options].apply(instance,args)}"option"==options&&(2==callArguments.length&&(hasCallRes=!0,callRes=utils.e6(instance.options,callArguments[1])),3==callArguments.length&&instance._setOption(callArguments[1],callArguments[2]))}else{var clone=$.extend(!0,{},options);$.each(clone,$.proxy($el.data("theta.carousel")._setOption,$el.data("theta.carousel")))}else new $.theta.carousel(this,options)});return hasCallRes?callRes:eachRes}}(jQuery)},{"./a1/b7.js":4,"./a1/b8.js":6,"./a1/a2.js":7,"./a1/effect_reflection.js":8,"./a1/a3.js":9,"./a1/a4.js":10,"./a1/e2.js":11,"./Qz3.js":12,"./b2.js":16,"./b3.js":17,"./c1.js":18,"./endless_rotation_logic_controller.js":19,"./Qwq.js":20,"./b6.js":21,"./b5.js":23,"./b9.js":24,"./paths/a5.js":25,"./paths/a9.js":27,"./paths/a6.js":28,"./paths/a7.js":29,"./paths/a8.js":30,"./paths/e5.js":31,"./rotation_logic_controller.js":34,"./e6":35,"./e4.js":37}],16:[function(require,module,exports){module.exports=function(carousel){this.e1=carousel,this.k3=!1,this.h5=null,this.queue=[],this.distance=[],this.h7=null,this.R=function(){this.queue=[],this.distance=[]},this.animate=function(from,to,k5,easing,duration){"undefined"==typeof easing&&(easing=null),"undefined"==typeof duration&&(duration=null),this.addDistance(Math.abs(to-from)),this.queue.length>5||(this.queue.push({from:from,to:to,k5:k5,easing:easing,duration:duration}),this.k3||this.h6())},this.completeCurrentImmediately=function(){null!=this.h7&&this.h7.stop(!0,!0)},this.h6=function(){if(this.queue.length>0){var element=this.queue[0];this.queue=this.queue.slice(1),this.h5=element.k5,this.h7=$(element);var stepDist=Math.abs(element.from-element.to),easing=null==element.easing?this.getEasing(stepDist):element.easing,duration=(null==element.duration?this.e1.options.rotationAnimationDuration:element.duration)*this.g3(stepDist);this.h7.animate({from:element.to},{easing:easing,duration:duration,start:$.proxy(this.onStart,this),step:$.proxy(this.k4,this),done:$.proxy(this.onDone,this),always:$.proxy(this.k9,this)})}},this.Q=function(){return this.queue.length>0?this.queue[this.queue.length-1].k5:this.h5},this.onStart=function(){this.k3=!0},this.k4=function(val){$(this).trigger("step",val)},this.onDone=function(){$(this).trigger("done",this.h5)},this.k9=function(){this.k3=!1,this.h6(),this.h7=null},this.addDistance=function(value){this.distance.push({date:new Date,value:value}),this.distance=$(this.distance).filter(function(i,d){return new Date-d.date<5e3})},this.w_a=function(){for(var distance=0,date=new Date,i=0;i<this.distance.length;i++){var d=this.distance[i];date-d.date<this.e1.options.rotationAnimationDuration&&(distance+=d.value)}return distance},this.g3=function(oneStepDist){return this.e1.options.autorotation?1:0==this.w_a()?1:1/(this.w_a()/oneStepDist)},this.getEasing=function(oneStepDist){return this.g3(oneStepDist)>.4?this.e1.options.rotationAnimationEasing:"linear"}}},{}],17:[function(require,module,exports){module.exports=function(){var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2)}}),$.extend(baseEasings,{Sine:function(p){return 1-Math.cos(p*Math.PI/2)},Circ:function(p){return 1-Math.sqrt(1-p*p)},Elastic:function(p){return 0===p||1===p?p:-Math.pow(2,8*(p-1))*Math.sin((80*(p-1)-7.5)*Math.PI/15)},Back:function(p){return p*p*(3*p-2)},Bounce:function(p){for(var pow2,bounce=4;p<((pow2=Math.pow(2,--bounce))-1)/11;);return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((3*pow2-2)/22-p,2)}});var allEasings={};$.each(baseEasings,function(name,easeIn){allEasings["easeIn"+name]=easeIn,allEasings["easeOut"+name]=function(p){return 1-easeIn(1-p)},allEasings["easeInOut"+name]=function(p){return p<.5?easeIn(2*p)/2:1-easeIn(p*-2+2)/2}}),$.each(allEasings,function(name,e){"undefined"==typeof $.easing[name]&&($.easing[name]=e)})}},{}],18:[function(require,module,exports){function extend(obj){obj.update=function(){for(var invalidate=!1,i=0;i<this.e1.a2.length;i++){var e=this.e1.a2[i],oldSize=null;e.size&&(oldSize=e.size),e.size={height:e.b5.height(),width:e.b5.width()},oldSize&&oldSize.height==e.size.height&&oldSize.width==e.size.width||(invalidate=!0)}invalidate&&this.e1.invalidate()},obj.destroy=function(){clearInterval(this.interval)}}module.exports=function(carousel){extend(this),this.e1=carousel,this.interval=setInterval($.proxy(this.update,this),500),this.update()}},{}],19:[function(require,module,exports){function extend(obj){obj.moveToInternal=function(index){var straight=this.e1.options.selectedIndex-index,reverse=0,reversePreferable=!1;index>this.e1.options.selectedIndex?reverse=this.e1.a2.length-index+this.e1.options.selectedIndex:(reverse=(this.e1.a2.length-this.e1.options.selectedIndex+index)*-1,reversePreferable=!0);var distance=straight*this.w_a();(Math.abs(reverse)<Math.abs(straight)||reversePreferable&&Math.abs(reverse)==Math.abs(straight))&&(distance=reverse*this.w_a()),this.e1.c2.h3(!0),this.e1.e2(),this.e1.f1.animate(0,distance,index,1===Math.abs(reverse)?null:"linear")},obj.moveBack=function(){var pendingTarget=this.e1.f1.k3?this.e1.f1.Q():this.e1.options.selectedIndex;return pendingTarget--,pendingTarget<0&&(pendingTarget=this.e1.a2.length+pendingTarget),this.e1.c2.h3(!0),this.e1.e2(),this.e1.f1.animate(0,this.w_a(),pendingTarget,null),
!0},obj.moveForward=function(){var pendingTarget=this.e1.f1.k3?this.e1.f1.Q():this.e1.options.selectedIndex;return pendingTarget++,pendingTarget>=this.e1.a2.length&&(pendingTarget-=this.e1.a2.length),this.e1.c2.h3(!0),this.e1.e2(),this.e1.f1.animate(0,-1*this.w_a(),pendingTarget,null),!0},obj.consumeMotion=function(distance){var k2=this.e1.b7(distance),scrolledElements=parseInt(distance/this.w_a(),10),prevIndex=this.e1.options.selectedIndex;this.e1.options.selectedIndex-=scrolledElements;var consumedDistance=prevIndex-this.e1.options.selectedIndex;return this.e1.options.selectedIndex<0&&(this.e1.options.selectedIndex=this.e1.options.selectedIndex%this.e1.a2.length+this.e1.a2.length,consumedDistance=this.e1.a2.length-this.e1.options.selectedIndex+prevIndex),this.e1.options.selectedIndex>=this.e1.a2.length&&(this.e1.options.selectedIndex=this.e1.options.selectedIndex%this.e1.a2.length,consumedDistance=this.e1.a2.length-prevIndex+this.e1.options.selectedIndex,consumedDistance*=-1),prevIndex!=this.e1.options.selectedIndex&&this.e1.k8(),{distance:consumedDistance*this.w_a(),k2:k2}},obj.handleMotionEnd=function(remainingDistance){if(0!=remainingDistance){var targetIndex=this.e1.options.selectedIndex;Math.abs(remainingDistance)>this.w_a()/2&&(remainingDistance<0?targetIndex++:targetIndex--);var reverse=!1;0==this.e1.a2.length?targetIndex=0:(targetIndex<0&&(targetIndex=targetIndex%this.e1.a2.length+this.e1.a2.length,reverse="back"),targetIndex>=this.e1.a2.length&&(targetIndex%=this.e1.a2.length,reverse="forward"));var targetDistance=0;targetDistance=reverse?"back"===reverse?(this.e1.a2.length-targetIndex+this.e1.options.selectedIndex)*this.w_a():(this.e1.a2.length-this.e1.options.selectedIndex+targetIndex)*this.w_a()*-1:(this.e1.options.selectedIndex-targetIndex)*this.w_a();var duration=Math.abs(this.e1.options.rotationAnimationDuration*(remainingDistance/this.w_a()));duration=Math.min(duration,this.e1.options.rotationAnimationDuration/2),this.e1.f1.animate(remainingDistance,targetDistance,targetIndex,null,duration)}},obj.alignElements=function(animationShift){if(0==this.e1.a2.length||this.e1.options.selectedIndex<0)return!1;this.e1.containerSize=this.e1.b9();var shift=0;"undefined"!=typeof animationShift&&(shift=animationShift);for(var location=this.ca2(),ranges=this.k9(location),i=0;i<this.e1.a2.length;i++)this.e1.a2[i].isEndlessProcessed=!1;for(var visibilityInfo=[],i=new endlessIterator(this.e1,this.e1.options.selectedIndex);!i.isCycleCompleted();i.moveNext()){var visible=this.q2(this.e1.a2[i.getCurrentIndex()],location+shift,ranges);visible&&(this.e1.a2[i.getCurrentIndex()].isEndlessProcessed=!0),visibilityInfo[i.getCurrentIndex()]=visible,location=this.b5(location,this.w_a())}location=this.ca2();for(var i=new endlessIterator(this.e1,this.e1.options.selectedIndex-1);!i.isCycleCompleted()&&!this.e1.a2[i.getCurrentIndex()].isEndlessProcessed;i.movePrev())location=this.decrementValue(location,this.w_a()),visibilityInfo[i.getCurrentIndex()]=this.q2(this.e1.a2[i.getCurrentIndex()],location+shift,ranges);for(var i=0;i<this.e1.a2.length;i++)this.base.q1(!visibilityInfo[i],this.e1.a2[i]);return this.setZIndexes(),!1},obj.q1=function(hide){}}module.exports=function(carousel){var rotation_logic_controller=require("./rotation_logic_controller.js");this.base=new rotation_logic_controller(carousel),$.extend(this,this.base),extend(this)};var endlessIterator=function(carousel,currentIndex){this.currentIndex=currentIndex,this.currentIndex==-1&&(this.currentIndex=carousel.a2.length-1),this.iterations=0,this.e1=carousel,this.moveNext=function(){this.currentIndex++,this.currentIndex==this.e1.a2.length&&(this.currentIndex=0),this.iterations++},this.movePrev=function(){this.currentIndex--,this.currentIndex==-1&&(this.currentIndex=this.e1.a2.length-1),this.iterations--},this.isCycleCompleted=function(){return Math.abs(this.iterations)>=this.e1.a2.length},this.getCurrentIndex=function(){return this.currentIndex}}},{"./rotation_logic_controller.js":34}],20:[function(require,module,exports){function extend(obj){obj.wwa=function(){return!0},obj.w_a=function(){return this.e1.options.distanceInFallbackMode},obj.ca2=function(){return 0},obj.b5=function(value,increment){return value+increment},obj.decrementValue=function(value,decrement){return value-decrement},obj.c3=function(){return-1*this.b9()},obj.b9=function(){return(this.e1.containerSize.width+this.w_a())/2},obj.q2=function(element,value){var left=value-element.size.width/2+this.e1.containerSize.width/2,top=this.e1.containerSize.height/2-element.size.height/2;element.b5.css({transform:"",left:left+"px",top:top+"px"});var visible=value>this.c3()&&value<this.b9();return visible?element.b5.show():element.b5.hide(),visible},obj.destroy=function(){this.base.destroy();for(var i=0;i<this.e1.a2.length;i++)this.e1.a2[i].b5.css({left:"0",top:"0"})}}function Qwa(){if(document.body&&void 0!==document.body.style.perspective)return!0;var _tempDiv=document.createElement("div"),style=_tempDiv.style,a=["Webkit","Moz","O","Ms","ms"],i=a.length;if(void 0!==_tempDiv.style.perspective)return!0;for(;--i>-1;)if(void 0!==style[a[i]+"Perspective"])return!0;return!1}require("./e3.js");module.exports=function(carousel,baseRotator){this.base=baseRotator,$.extend(this,this.base),extend(this)},module.exports.fallback=function(){return!Qwa()}},{"./e3.js":36}],21:[function(require,module,exports){function extend(obj){obj.update=function(){var widthToApply=this.e1.widget().width(),heightToApply=this.e1.widget().height(),scaleToApply=null;if(0!=widthToApply&&0!=heightToApply&&(null!=this.e1.options.designedForWidth&&null!=this.e1.options.designedForHeight&&(scaleToApply=Math.min(widthToApply/this.e1.options.designedForWidth,heightToApply/this.e1.options.designedForHeight)),widthToApply!=this.k8||heightToApply!=this._a1||scaleToApply!=this.g3)){var container=$(".theta-carousel-inner-container",this.e1.widget());null!=scaleToApply&&(widthToApply/=scaleToApply,heightToApply/=scaleToApply,widthToApply/heightToApply<this.e1.options.designedForWidth/this.e1.options.designedForHeight?heightToApply=widthToApply*(this.e1.options.designedForHeight/this.e1.options.designedForWidth):widthToApply=heightToApply*(this.e1.options.designedForWidth/this.e1.options.designedForHeight),container.css({left:this.e1.widget().width()/2-widthToApply/2,top:this.e1.widget().height()/2-heightToApply/2})),widthToApply!=this.k8&&(container.width(widthToApply),this.e1.invalidate(),this.k8=widthToApply),heightToApply!=this._a1&&(container.height(heightToApply),this.e1.invalidate(),this._a1=heightToApply),scaleToApply!=this.g3&&(null==scaleToApply?container.css({transform:"translate3d(0px,0px, 100000px)",position:"static"}):container.css({transform:"translate3d(0px,0px, 100000px) scale("+scaleToApply+")",position:"relative"}),this.e1.invalidate(),this.g3=scaleToApply)}},obj.q8=function(){return this.g3?this.g3:1},obj.destroy=function(){clearInterval(this.interval)}}module.exports=function(carousel){extend(this),this.e1=carousel,this.interval=setInterval($.proxy(this.update,this),200),this.update(),this.k8=null,this._a1=null,this.g3=null}},{}],22:[function(require,module,exports){module.exports=function(carousel){this.e1=carousel,this.c2=[],this.h8=0,this.k3=!1,this.L=!1,this.l=!1,this.L3=function(distance){this.c2.push({date:new Date,distance:distance}),this.h1()},this.stop=function(){this.l=!1,$(this).stop(!1,!1)},this.k1=function(){if(this.L){this.L=!1,this.l=!0,$(this).stop(!1,!1);var brakingDistLeft=this.l1.l3+this.l1.l0-this.h8,speedLeft=this.l1.l2*Math.abs(brakingDistLeft/this.l1.l0),friction=100*this.e1.options.inertiaHighFriction,l0=speedLeft*speedLeft/(2*friction);speedLeft<0&&(l0*=-1);var brakingTime=l0/(speedLeft/2);$(this).animate({h8:this.h8+l0},{easing:"easeOutQuad",duration:1e3*brakingTime,step:$.proxy(this.k4,this),complete:$.proxy(this.l4,this),fail:$.proxy(this.onFail,this)})}},this.run=function(l3){var speed=this.l5();if(this.c2=[],0==speed)return void $(this).trigger("complete");var friction=100*this.e1.options.inertiaFriction,l0=speed*speed/(2*friction);speed<0&&(l0*=-1);var brakingTime=l0/(speed/2);this.h8=l3,this.k3=!0,this.L=!0,this.l1={l2:speed,l0:l0,l3:l3},$(this).animate({h8:l3+l0},{easing:"easeOutCirc",duration:1e3*brakingTime,step:$.proxy(this.k4,this),complete:$.proxy(this.l4,this),fail:$.proxy(this.onFail,this)})},this.k4=function(val){isNaN(val)||(this.h8=val,$(this).trigger("step",val))},this.l4=function(){this.k3=!1,$(this).trigger("complete")},this.onFail=function(){this.l||(this.k3=!1,$(this).trigger("stop"))},this.h1=function(){this.c2=$(this.c2).filter(function(i,d){return new Date-d.date<5e3})},this.l5=function(){for(var distance=0,date=new Date,i=0;i<this.c2.length;i++){var d=this.c2[i];date-d.date<200&&(distance+=d.distance)}return 5*distance}}},{}],23:[function(require,module,exports){function extend(obj){obj.isVerticalRotation=function(){return this.e1.options.verticalRotation&&!this.e1.q1.wwa()},obj.getSensitivity=function(){return this.e1.q1.wwa()?1:this.e1.options.sensitivity/this.e1.c3.q8()},obj.isReadonly=function(){return!this.e1.options.enabled||this.e1.options.autorotation},obj.L3=function(){return this.e1.options.gesturesEnabled},obj.h3=function(h9){this.h9=h9},obj.k3=function(){return null==this.a2||new Date-this.a2>50},obj.L1=function(){this.a2=new Date},obj.h8=function(x){this.e1._a3.h8(x),this.initialX=x},obj.a3=function(x){var delta=this.initialX-x;delta*=this.getSensitivity(),x=this.initialX-delta,this.e1._a3.a3(x)},obj.onMousewheel=function(event){if(this.e1.options.mousewheelEnabled&&!this.isReadonly()&&(event.preventDefault(),!this.e1.getIsInMotion())){var up=!1,down=!1,original=event.originalEvent;event.deltaY&&(1==event.deltaY?up=!0:event.deltaY==-1&&(down=!0)),original.wheelDelta&&(original.wheelDelta>=120?up=!0:original.wheelDelta<=-120&&(down=!0)),original.detail&&(original.detail==-3?up=!0:3==original.detail&&(down=!0)),up&&(this.getSensitivity()>0&&this.e1.moveBack(),this.getSensitivity()<0&&this.e1.moveForward()),down&&(this.getSensitivity()<0&&this.e1.moveBack(),this.getSensitivity()>0&&this.e1.moveForward())}},obj.onKeyDown=function(event){this.e1.options.keyboardEnabled&&(this.isReadonly()||(event.which!=this.getBackKey()&&event.which!=this.getForwardKey()||event.preventDefault(),this.e1._a3.isInMotion||this.e1._a3.inertia.k3||new Date-this.L5<this.e1.options.minKeyDownFrequency||(this.L5=new Date,event.which==this.getBackKey()&&(this.getSensitivity()>0&&this.e1.moveBack(),this.getSensitivity()<0&&this.e1.moveForward()),event.which==this.getForwardKey()&&(this.getSensitivity()<0&&this.e1.moveBack(),this.getSensitivity()>0&&this.e1.moveForward()))))},obj.k8=function(event){this.isReadonly()||this.e1._a3.isInMotion||this.e1._a3.inertia.k3||event.which!=this.getBackKey()&&event.which!=this.getForwardKey()||this.e1.f1.R()},obj.destroyable=function(key,func){return this.a2[key]=func,func},obj.destroy=function(){for(var key in this.a2)this.e1.widget().off(key,this.a2[key])},obj.getForwardKey=function(){return this.e1.options.verticalRotation?40:37},obj.getBackKey=function(){return this.e1.options.verticalRotation?38:39}}module.exports=function(carousel){extend(this),this.e1=carousel,this.L5=new Date,this.a2=null,this.h9=!1,this.a2=[],this.e1.widget().keyup(this.destroyable("keyup",$.proxy(this.k8,this))),this.e1.widget().keydown(this.destroyable("keydown",$.proxy(this.onKeyDown,this))),this.e1.widget().mousedown(this.destroyable("mousedown",$.proxy(function(e){!this.isReadonly()&&this.L3()&&(this.e1.widget().focus(),this.h8(this.isVerticalRotation()?e.pageY:e.pageX),e.preventDefault())},this))),this.e1.widget().mousemove(this.destroyable("mousemove",$.proxy(function(e){!this.isReadonly()&&this.L3()&&(this.k3()&&(this.L1(),this.a3(this.isVerticalRotation()?e.pageY:e.pageX)),e.preventDefault())},this))),this.e1.widget().mouseleave(this.destroyable("mouseleave",$.proxy(function(e){!this.isReadonly()&&this.L3()&&(this.h9||(this.e1._a3.motionEnded(!0),e.preventDefault()))},this))),this.e1.widget().mouseup(this.destroyable("mouseup",$.proxy(function(e){!this.isReadonly()&&this.L3()&&(this.e1._a3.motionEnded(!0),e.preventDefault())},this))),"undefined"!=typeof this.e1.widget().get(0).onmousewheel?this.e1.widget().on("mousewheel",this.destroyable("mousewheel",$.proxy(this.onMousewheel,this))):this.e1.widget().on("DOMMouseScroll",this.destroyable("DOMMouseScroll",$.proxy(this.onMousewheel,this))),this.e1.widget().on("touchstart",this.destroyable("touchstart",$.proxy(function(e){!this.isReadonly()&&this.L3()&&this.h8(this.isVerticalRotation()?e.originalEvent.touches[0].screenY:e.originalEvent.touches[0].screenX)},this))),this.e1.widget().on("touchmove",this.destroyable("touchmove",$.proxy(function(e){!this.isReadonly()&&this.L3()&&(this.k3()&&(this.L1(),this.a3(this.isVerticalRotation()?e.originalEvent.touches[0].screenY:e.originalEvent.touches[0].screenX)),e.preventDefault())},this))),this.e1.widget().on("touchend",this.destroyable("touchend",$.proxy(function(e){!this.isReadonly()&&this.L3()&&this.e1._a3.motionEnded(!0)},this))),this.e1.widget().on("touchcancel",this.destroyable("touchcancel",$.proxy(function(e){!this.isReadonly()&&this.L3()&&this.e1._a3.motionEnded(!0)},this))),this.e1.widget().on("taphold",this.destroyable("taphold",function(e){e.preventDefault()}))}},{}],24:[function(require,module,exports){function extend(obj){obj.a1=function(){return this.inertia.k3||this.isInMotion},obj.h8=function(position){this.inertia.k3||(this.distance=0),this.inertia.stop(),this.isInMotion=!0,this.L2=position,this.raiseStart=!0},obj.a3=function(position){this.isInMotion&&(this.raiseStart&&position!=this.L2&&($(this).trigger("start"),this.raiseStart=!1),this.inertia.L3(position-this.L2),this.a3Internal(position))},obj.a3Internal=function(position){this.distance+=position-this.L2,this.L2=position;var consumingData=this.k7(this.distance);this.distance-=consumingData.distance,consumingData.k2&&this.inertia.k3&&this.inertia.k1()},obj.motionEnded=function(useInertia){this.inertia.k3||(this.isInMotion=!1,useInertia?this.inertia.run(this.L2):($(this).trigger("end",this.distance),this.distance=0))},obj.inertiaStop=function(){this.isInMotion=!1}}module.exports=function(carousel,k7){var inertia=require("./inertia.js");extend(this),this.isInMotion=!1,this.L2=null,this.distance=0,this.k7=k7,this.inertia=new inertia(carousel),$(this.inertia).on("complete",$.proxy(this.motionEnded,this,!1)),$(this.inertia).on("stop",$.proxy(this.inertiaStop,this)),$(this.inertia).on("step",$.proxy(function(e,value){this.a3Internal(value)},this))}},{"./inertia.js":22}],25:[function(require,module,exports){module.exports=function(carousel,settings){var K=require("./K.js"),C=require("./../C.js"),base=new K(carousel,{fi:10,flatness:10});$.extend(this,base),$.extend(this.settings,settings),this.e7=function(value){var angle=value*Math.PI*2/360,x=this.settings.fi*value*Math.cos(angle)/(2*Math.PI),y=this.settings.fi*value*Math.sin(angle)/(2*Math.PI),z=-1*Math.pow(value-this.a2(),2)/this.settings.flatness;return new C(x,y,z)},this.a2=function(){return 450},this.c3=function(){return 10},this.b9=function(){return 650}}},{"./../C.js":32,"./K.js":26}],26:[function(require,module,exports){module.exports=function(carousel,settings){var rotation=require("./../h1.js"),vector=require("./../e7.js");this.settings={shiftX:0,shiftY:0,shiftZ:0,rotationAngleXY:0,rotationAngleZY:0,rotationAngleZX:0,rotateElements:!1,endless:!1},this.e1=carousel,$.extend(this.settings,settings),this.getContainerSize=function(){return this.e1.b9()},this.isEndless=function(){return this.settings.endless},this.c3=function(){return null},this.b9=function(){return null},this.a2=function(){return 0},this.b5=function(value,distance){return value+distance},this.decrementValue=function(value,distance){return value-distance},this.getPoint=function(value){var res=this.e7(value);res.x=res.x+this.settings.shiftX,res.y=res.y+this.settings.shiftY,res.z=res.z+this.settings.shiftZ;var pair=null;return pair=this.rotate({a:res.x,b:res.y},{a:0,b:0},this.settings.rotationAngleXY),res.x=pair.a,res.y=pair.b,pair=this.rotate({a:res.z,b:res.y},{a:0,b:0},this.settings.rotationAngleZY),res.z=pair.a,res.y=pair.b,pair=this.rotate({a:res.z,b:res.x},{a:0,b:0},this.settings.rotationAngleZX),res.z=pair.a,res.x=pair.b,res},this.rotate=function(pairToRotate,pairCenter,angle){if(0==angle)return pairToRotate;var angleInRadians=angle*(Math.PI/180),cosTheta=Math.cos(angleInRadians),sinTheta=Math.sin(angleInRadians),a=cosTheta*(pairToRotate.a-pairCenter.a)-sinTheta*(pairToRotate.b-pairCenter.b)+pairCenter.a,b=sinTheta*(pairToRotate.a-pairCenter.a)+cosTheta*(pairToRotate.b-pairCenter.b)+pairCenter.b;return pairToRotate.a=a,pairToRotate.b=b,pairToRotate},this.a2Rotation=function(){if(!this.settings.rotateElements)return null;if(0==this.settings.rotationAngleZY&&0==this.settings.rotationAngleZX&&0==this.settings.rotationAngleXY)return null;var v=new vector;v.x=this.settings.rotationAngleZY,v.y=-1*this.settings.rotationAngleZX,v.z=-1*this.settings.rotationAngleXY;var angle=-1*v.length();return new rotation(v,angle)}}},{"./../h1.js":33,"./../e7.js":38}],27:[function(require,module,exports){module.exports=function(carousel,settings){var K=require("./K.js"),C=require("./../C.js"),base=new K(carousel,{wideness:200});$.extend(this,base),$.extend(this.settings,settings),this.e7=function(value){var y=(value*value*value+20*value)/(1e3*this.settings.wideness),z=-2*Math.abs(y);return new C(value,y,z)}}},{"./../C.js":32,"./K.js":26}],28:[function(require,module,exports){module.exports=function(carousel,settings){var K=require("./K.js"),C=require("./../C.js"),getBezierBox=require("./../k8.js"),getBezier=require("./../b4.js"),base=new K(carousel,{xyPathBezierPoints:{p1:{x:-100,y:0},p2:{x:0,y:0},p3:{x:0,y:0},p4:{x:100,y:0}},xzPathBezierPoints:{p1:{x:-100,y:0},p2:{x:0,y:0},p3:{x:0,y:0},p4:{x:100,y:0}},xyArcLengthBezierPoints:{p1:{x:0,y:0},p2:{x:50,y:50},p3:{x:50,y:50},p4:{x:100,y:100}},pathLength:1e3,zeroPosition:.5,width:1e3,height:1e3,depth:1e3});$.extend(this,base),$.extend(this.settings,settings),this.e7=function(value){var distance=Math.abs(value-this.c3()),absDist=Math.abs(this.b9()-this.c3()),bezierT=Math.min(distance/absDist,1),xyPoints=this.settings.xyPathBezierPoints,xyArcLengthPoints=this.settings.xyArcLengthBezierPoints,xzPoints=this.settings.xzPathBezierPoints,boxXY=getBezierBox(xyPoints.p1,xyPoints.p2,xyPoints.p3,xyPoints.p4),boxXZ=getBezierBox(xzPoints.p1,xzPoints.p2,xzPoints.p3,xzPoints.p4);bezierT=getBezier(bezierT,xyArcLengthPoints.p1,xyArcLengthPoints.p2,xyArcLengthPoints.p3,xyArcLengthPoints.p4).y/100;var CXY=getBezier(bezierT,xyPoints.p1,xyPoints.p2,xyPoints.p3,xyPoints.p4),x=this.K(CXY.x,boxXY.minX,boxXY.maxX),y=this.K(CXY.y,boxXY.minY,boxXY.maxY),z=getBezier(bezierT,xzPoints.p1,xzPoints.p2,xzPoints.p3,xzPoints.p4).y;return z=this.K(z,boxXZ.minY,boxXZ.maxY),x=this.settings.width*x-this.settings.width/2,y=this.settings.height*y*-1,z=this.settings.depth*z*-1,new C(x,y,z)},this.K=function(val,a,b){var dist=Math.abs(b-a),min=Math.min(a,b);return 0!=dist?(val-min)/dist:val-min},this.c3=function(){return 0},this.b9=function(){return this.settings.pathLength},this.a2=function(){return this.settings.pathLength*this.settings.zeroPosition}}},{"./../b4.js":13,"./../k8.js":14,"./../C.js":32,"./K.js":26}],29:[function(require,module,exports){module.exports=function(carousel,settings){var K=require("./K.js"),C=require("./../C.js"),base=new K(carousel,{a:200,b:200});$.extend(this,base),$.extend(this.settings,settings),this.e7=function(value){value*=-1,value-=180;var angle=value*Math.PI*2/360,z=this.settings.b*Math.sin(angle),x=this.settings.a*Math.cos(angle);return new C(x,0,z)},this.a2=function(){return 90},this.c3=function(){return this.settings.endless?-90:0},this.b9=function(){return this.settings.endless?270:180}}},{"./../C.js":32,"./K.js":26}],30:[function(require,module,exports){module.exports=function(carousel,settings){var K=require("./K.js"),C=require("./../C.js"),base=new K(carousel,{});$.extend(this,base),$.extend(this.settings,settings),this.e7=function(value){var z=-1*value;return new C(0,0,z)}}},{"./../C.js":32,"./K.js":26}],31:[function(require,module,exports){module.exports=function(carousel,settings){var K=require("./K.js"),C=require("./../C.js"),base=new K(carousel,{wideness:200});$.extend(this,base),$.extend(this.settings,settings),this.e7=function(value){var z=-1*value*value*(1/this.settings.wideness);return new C(value,0,z)}}},{"./../C.js":32,"./K.js":26}],32:[function(require,module,exports){module.exports=function(x,y,z){this.x=x,this.y=y,this.z=z}},{}],33:[function(require,module,exports){module.exports=function(vector,angle){this.vector=vector,this.angle=angle,this.getString=function(){return"rotate3d("+this.vector.x+", "+this.vector.y+", "+this.vector.z+", "+this.angle+"deg)"}}},{}],34:[function(require,module,exports){function extend(obj){obj.wwa=function(){return!1},obj.w_a=function(){return this.e1.options.distance},obj.ca2=function(){return this.e1.path.a2()},obj.b5=function(value,increment){return this.e1.path.b5(value,increment)},obj.decrementValue=function(value,decrement){return this.e1.path.decrementValue(value,decrement)},obj.c3=function(){return this.e1.path.c3()},obj.b9=function(){return this.e1.path.b9()},obj.moveTo=function(index){if(!this.e1._a3.a1()&&(this.e1.f1.R(),this.e1.f1.completeCurrentImmediately(),index!=this.e1.options.selectedIndex)){if(index==this.e1.options.selectedIndex+1)return void this.e1.moveForward();if(index==this.e1.options.selectedIndex-1)return void this.e1.moveBack();index=Math.max(0,index),index=Math.min(index,this.e1.a2.length-1),this.moveToInternal(index)}},obj.moveToInternal=function(index){var distance=this.w_a()*(this.e1.options.selectedIndex-index);this.e1.c2.h3(!0),this.e1.e2(),this.e1.f1.animate(0,distance,index,"linear")},obj.moveBack=function(){var pendingTarget=this.e1.f1.k3?this.e1.f1.Q():this.e1.options.selectedIndex;return pendingTarget>0&&(pendingTarget--,this.e1.c2.h3(!0),this.e1.e2(),this.e1.f1.animate(0,this.w_a(),pendingTarget,null),!0)},obj.moveForward=function(){var pendingTarget=this.e1.f1.k3?this.e1.f1.Q():this.e1.options.selectedIndex;return pendingTarget<this.e1.a2.length-1&&(pendingTarget++,this.e1.c2.h3(!0),this.e1.e2(),this.e1.f1.animate(0,-1*this.w_a(),pendingTarget,null),!0)},obj.consumeMotion=function(distance){var k2=this.e1.b7(distance),optDistance=this.w_a(),scrolledElements=parseInt(distance/optDistance,10),prevIndex=this.e1.options.selectedIndex;return this.e1.options.selectedIndex-=scrolledElements,this.e1.options.selectedIndex=Math.max(0,this.e1.options.selectedIndex),this.e1.options.selectedIndex=Math.min(this.e1.options.selectedIndex,this.e1.a2.length-1),prevIndex!=this.e1.options.selectedIndex&&this.e1.k8(),{distance:(prevIndex-this.e1.options.selectedIndex)*optDistance,k2:k2}},obj.handleMotionEnd=function(remainingDistance){if(0!=remainingDistance){var targetIndex=this.e1.options.selectedIndex;Math.abs(remainingDistance)>this.w_a()/2&&(remainingDistance<0?targetIndex++:targetIndex--),0==this.e1.a2.length?targetIndex=0:(targetIndex=Math.max(0,targetIndex),targetIndex=Math.min(targetIndex,this.e1.a2.length-1));var targetDistance=(this.e1.options.selectedIndex-targetIndex)*this.w_a(),duration=Math.abs(this.e1.options.rotationAnimationDuration*(remainingDistance/this.w_a()));duration=Math.min(duration,this.e1.options.rotationAnimationDuration/2),this.e1.f1.animate(remainingDistance,targetDistance,targetIndex,null,duration)}},obj.alignElements=function(animationShift){if(0==this.e1.a2.length||this.e1.options.selectedIndex<0)return!1;this.e1.containerSize=this.e1.b9();var shift=0;"undefined"!=typeof animationShift&&(shift=animationShift);var k2=!1;(0==this.e1.options.selectedIndex&&shift>0||this.e1.options.selectedIndex==this.e1.a2.length-1&&shift<0)&&(shift=Math.pow(Math.abs(shift),.7)*(shift/Math.abs(shift)),k2=!0);var location=this.ca2(),rangeShift=0;(0==this.e1.options.selectedIndex&&shift>0||this.e1.options.selectedIndex==this.e1.a2.length-1&&shift<0)&&(rangeShift=shift);for(var ranges=this.k9(location+rangeShift),i=this.e1.options.selectedIndex;i<this.e1.a2.length;i++)this.q2(this.e1.a2[i],location+shift,ranges),location=this.b5(location,this.w_a());location=this.ca2();for(var i=this.e1.options.selectedIndex-1;i>=0;i--)location=this.decrementValue(location,this.w_a()),this.q2(this.e1.a2[i],location+shift,ranges);return this.setZIndexes(),k2},obj.q2=function(element,value,ranges){if(this.setElementVisibility(ranges,element,value)){var C=this.e1.path.getPoint(value),elementTransform=new transform;elementTransform.translateZ=C.z*this.e1.options.scaleZ,elementTransform.translateX=C.x*this.e1.options.scaleX+this.e1.containerSize.width/2-element.size.width/2,elementTransform.translateY=C.y*this.e1.options.scaleY+this.e1.containerSize.height/2-element.size.height/2;var pathRotation=this.e1.path.a2Rotation();pathRotation&&elementTransform.rotations.push(pathRotation),"scale"==this.e1.options.mode3D&&(elementTransform.scale=this.e1.options.perspective/(this.e1.options.perspective-elementTransform.translateZ),elementTransform.translateZ=0);for(var i=0;i<this.e1.h4.length;i++)"positioning"===this.e1.h4[i].applyPhase&&this.e1.h4[i].apply(elementTransform,element,value);return elementTransform.apply(element.element),element.location=C,!0}return!1},obj.setZIndexes=function(){for(var tmpElements=[],i=0;i<this.e1.a2.length;i++){var e=this.e1.a2[i];e.location&&tmpElements.push(e)}tmpElements.sort(function(e1,e2){return e1.location.z-e2.location.z});for(var i=0;i<tmpElements.length;i++)tmpElements[i].b5.get(0).style.zIndex=i},obj.k9=function(root){var location=root,res=[];return null!=this.e1.options.numberOfElementsToDisplayLeft&&res.push({from:this.decrementValue(location,this.w_a()*(this.e1.options.numberOfElementsToDisplayLeft+1)),to:this.decrementValue(location,this.w_a()*this.e1.options.numberOfElementsToDisplayLeft),hide:"before"}),null!=this.e1.options.numberOfElementsToDisplayRight&&res.push({from:this.b5(location,this.w_a()*this.e1.options.numberOfElementsToDisplayRight),to:this.b5(location,this.w_a()*(this.e1.options.numberOfElementsToDisplayRight+1)),
hide:"after"}),res},obj.setElementVisibility=function(fadeRanges,element,value){var b5=element.b5,hidden=!1;if(null!=this.c3()&&value<this.c3()||null!=this.b9()&&value>this.b9())hidden=!0;else{0==fadeRanges.length&&b5.css({opacity:1});for(var i=0;i<fadeRanges.length;i++){var range=fadeRanges[i];if("before"==range.hide&&value<=range.from||"after"==range.hide&&value>=range.to){hidden=!0;break}if(value>range.from&&value<range.to){var distance=range.to-range.from,passed=Math.abs(value-("after"==range.hide?range.from:range.to)),opacity=(distance-passed)/distance;b5.css({opacity:opacity});break}b5.css({opacity:1})}}return this.q1(hidden,element),!hidden},obj.destroy=function(){for(var i=0;i<this.e1.a2.length;i++)this.e1.a2[i].b5.css({left:"0",top:"0",transform:"",opacity:"1"}),this.e1.a2[i].b5.show()},obj.q1=function(hide,element){hide?element.b5.hide():element.b5.show()}}var transform=require("./e3.js");module.exports=function(carousel){this.e1=carousel,extend(this)}},{"./e3.js":36}],35:[function(require,module,exports){module.exports=function(width,height){this.width=width,this.height=height}},{}],36:[function(require,module,exports){module.exports=function(){this.translateX=0,this.translateY=0,this.translateZ=0,this.scale=1,this.scaleX=1,this.scaleY=1,this.scaleZ=1,this.rotations=[],this.apply=function(e){var str="";0==this.translateX&&0==this.translateY&&0==this.translateZ||(str="translate3d("+this.translateX+"px, "+this.translateY+"px, "+this.translateZ+"px)"),1!=this.scale&&(str+=" scale("+this.scale+")"),1!=this.scaleX&&(str+=" scaleX("+this.scaleX+")"),1!=this.scaleY&&(str+=" scaleY("+this.scaleY+")"),1!=this.scaleZ&&(str+=" scaleZ("+this.scaleZ+")");for(var i=0;i<this.rotations.length;i++)str+=" "+this.rotations[i].getString();e.style.transform=str,e.style.webkitTransform=str,e.style.msTransform=str}}},{}],37:[function(require,module,exports){var utils=function(){this.e6=function(obj,property){for(var parts=property.split("."),res=obj,i=0;i<parts.length;i++)res=res[parts[i]];return res},this.e5=function(obj,property,value){for(var parts=property.split("."),target=obj,i=0;i<parts.length-1;i++)target=target[parts[i]];target[parts[parts.length-1]]=value}};module.exports=new utils},{}],38:[function(require,module,exports){module.exports=function(){this.x=0,this.y=0,this.z=0,this.e7=function(p1,p2){this.x=p2.x-p1.x,this.y=p2.y-p1.y,this.z=p2.z-p1.z},this.normalize=function(){var length=this.length();this.x/=length,this.y/=length,this.z/=length},this.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},this.angle=function(v){var scalarMultiplication=this.x*v.x+this.y*v.y+this.z*v.z,absThis=this.length(),absV=Math.sqrt(v.x*v.x+v.y*v.y+v.z*v.z),cosA=scalarMultiplication/(absThis*absV),a=Math.acos(cosA);return this.z>v.z&&(a*=-1),180*a/Math.PI},this.Qz2=function(){var res=new vector;return res.y=this.y,res.z=this.z,res.x=-1*(this.y*res.y+this.z*res.z)/this.x,res}}},{}]},{},[3]);
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