//creation of a service and register with angular so http is only in here and not the controller
(function(){
  
  var github = function($http){
    
    var getUser = function(username){
      //could promise so the .then is called after usercomplete
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response){
          return response.data;
        });
    };
    
    var getRepos = function(user){
      return $http.get(user.repos_url)
            .then(function(response){
              return response.data;
            });
    };
    
    
    return {
      getUser: getUser,
      getRepos: getRepos
    };
  };
  
  var module = angular.module("githubViewer");
  //register with angular
  module.factory("github", github);
  
}());