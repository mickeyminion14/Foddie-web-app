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
            controller :"login"
        }).when("/dashboard",{
            templateUrl :"./views/dashboard.html",
            controller :"emp1"  
        })  .when("/profile",{
          templateUrl :"./views/profile.html",
          controller :"login"
        }) .when("/",{
          templateUrl :"./views/home.html",
          controller :"home"
      })
        .when("/northIndian",{
          templateUrl :"./views/cuisines/northIndian.html",
          controller :"northIndian"
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
     app.controller("northIndian",function ($rootScope,$scope) {
      $('select').formSelect(); 
      $scope.item1;
      $scope.selectedItem="";
      $scope.selectedItem1=""; 
      $rootScope.cartObj=[];

      $scope.itemsArr=
      [
        {item_id:"item1" ,item_name: "Paneer Butter Masala", item_img: "./images/cuisines/northIndian/pbm.jpg"}, 
        {item_id:"item2" ,item_name: "Paneer Tikka Masala", item_img: "./images/cuisines/northIndian/ptm.jpg"}, 
        {item_id:"item3" ,item_name: "Paneer Lababdar", item_img: "./images/cuisines/northIndian/pld.jpg"},
        {item_id:"item4" ,item_name: "Malai Kofta", item_img: "./images/cuisines/northIndian/mkf.jpg"},
        {item_id:"item5" ,item_name: "Mix Vegetable", item_img: "./images/cuisines/northIndian/mxv.jpg"},
        {item_id:"item6" ,item_name: "Sev Tamatar", item_img: "./images/cuisines/northIndian/svt.JPG"}
      ];


      $scope.details=
       [  {quantity:"Quarter", price:60},
          {quantity:"Half", price:80},
          {quantity:"Full", price:140}
      
      ];

   
     

      $scope.addToCart=function(obj){

        if(obj.item_id.quantity==null){
          M.toast({html:'Please Select Quantity !'}); 
        }
        else{
          M.toast({html: 'Item Added To Cart'});
     
          console.log(obj.item_id.price);

          $scope.cartObj.push(obj);
          console.log($scope.cartObj)
        }
      };

     
    
       
    
      });




      app.controller("home",function ($rootScope) {
        $('.carousel.carousel-slider').carousel({
          fullWidth: true
        });
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