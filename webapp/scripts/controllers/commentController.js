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