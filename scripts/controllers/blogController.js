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