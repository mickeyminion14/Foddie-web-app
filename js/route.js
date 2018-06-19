 var app=angular.module("FirstApp",["ngRoute"]);
      app.config(function ($routeProvider) {
        // body...
        $routeProvider
          .when("/login",{
            templateUrl:"./views/login.html",
            controller :"login"
        })
          .when("/signup",{
            templateUrl :"./views/signup.html",
            controller :"emp1"
        }).when("/dashboard",{
            templateUrl :"./views/dashboard.html",
            controller :"emp1"  
        })  .when("/profile",{
          templateUrl :"./views/profile.html",
          controller :"emp1"
        }) .when("",{
        templateUrl :"./views/login.html",
        controller :"emp"
    })
      });

    app.controller("login",function ($rootScope,$location) {
      
      $rootScope.username="";
       $rootScope.password="";
       $rootScope.loc=$location.absUrl();

       $rootScope.validateLogin=function(username,password){
        if(username=='user1'&&password=="password"){
         M.toast({html: 'LOGGED IN SUCCESSFULLY !'})
        $location.path('/profile');
        $rootScope.loggedIn='true';
     
        }
       else{
          M.toast({html: ' PASSWORD OR USERNAME INCORRECT '})
       
       $location.path('/404');
        }
}

      });
     app.controller("emp1",function ($rootScope) {
      
    
      });
      app.controller("home",function ($rootScope) {
        $rootScope.loggedIn='false';
    
      });

     








 // var app=angular.module("FirstApp",["ui.router"]);
 //      app.config(function($stateProvider,$urlRouterProvider){
 //        $urlRouterProvider.when("","/Dashboard");

 //        $stateProvider
 //          .state('Dashboard',{          // this is not the url we have given but the name of the state
 //            url: '/Dashboard' ,     //here we are providing a url we want to show the users.
 //            templateUrl: "./index.html",
 //            controller: "emp1"
 //        })
 //          .state('signup',{
 //            url: '/signup',
 //            templateUrl: "./views/signup.html",
 //            controller: "emp2"
 //        })
 //          .state('login',{
 //            url: '/login',
 //            templateUrl: "./views/login.html",
 //            controller: "emp3"
 //        }) 
 //          .state('profile',{
 //            url: '/profile',
 //            templateUrl: "./views/profile.html",
 //            controller: "emp3"
 //        })

 //      });
 //      app.controller("emp1",function($scope){
 //        $scope.a="PARENT CONTROLLER";

 //      });
 //      app.controller("emp2",function($scope){
 //        $scope.b="PAGE 1 CONTROLLER";
 //      });
 //      app.controller("emp3",function($scope){
 //        $scope.c="PAGE 2 CONTROLLER";
 //      });