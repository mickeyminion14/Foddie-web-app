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
        }).when("/cart",{
          templateUrl :"./views/cart.html",
          controller :"cart"
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
      $rootScope.cartObj;

      $scope.itemsGravyArr=
      [
        {item_id:"item1" ,item_name: "Paneer Butter Masala", item_img: "./images/cuisines/northIndian/pbm.jpg"}, 
        {item_id:"item2" ,item_name: "Paneer Tikka Masala", item_img: "./images/cuisines/northIndian/ptm.jpg"}, 
        {item_id:"item3" ,item_name: "Paneer Lababdar", item_img: "./images/cuisines/northIndian/pld.jpg"},
        {item_id:"item4" ,item_name: "Tawa Paneer", item_img: "./images/cuisines/northIndian/twp.jpg"},
        {item_id:"item5" ,item_name: "Mattar Paneer", item_img: "./images/cuisines/northIndian/mtp.jpg"},
        {item_id:"item6" ,item_name: "Shahi Paneer", item_img: "./images/cuisines/northIndian/shp.jpg"},
        {item_id:"item7" ,item_name: "Kadai Paneer", item_img: "./images/cuisines/northIndian/kdp.jpg"},
        {item_id:"item8" ,item_name: "Malai Kofta", item_img: "./images/cuisines/northIndian/mkf.jpg"},
        {item_id:"item9" ,item_name: "Mix Vegetable", item_img: "./images/cuisines/northIndian/mxv.jpg"},
        {item_id:"item10" ,item_name: "Sev Tamatar", item_img: "./images/cuisines/northIndian/svt.JPG"},
        {item_id:"item11" ,item_name: "Chana Masala", item_img: "./images/cuisines/northIndian/chm.jpg"},
        {item_id:"item12" ,item_name: "Stuffed Tamatar", item_img: "./images/cuisines/northIndian/stft.jpg"},
        {item_id:"item13" ,item_name: "Dum Aloo", item_img: "./images/cuisines/northIndian/dma.jpg"},
        {item_id:"item14" ,item_name: "Masala Bhindi", item_img: "./images/cuisines/northIndian/msb.jpg"},
      ];


      $scope.itemsDalsArr=
      [
        {item_id:"item1" ,item_name: "Dal Makhni", item_img: "./images/cuisines/northIndian/dalm.jpg"}, 
        {item_id:"item2" ,item_name: "Dal Tadka", item_img: "./images/cuisines/northIndian/dalt.jpg"}, 
        {item_id:"item3" ,item_name: "Dal Fry", item_img: "./images/cuisines/northIndian/dalf.jpg"},
        {item_id:"item4" ,item_name: "Dal Bukhara", item_img: "./images/cuisines/northIndian/dalb.jpg"},
      
      ];


      $scope.detailsGravy=
       [  {quantity:"Quarter", price:60},
          {quantity:"Half", price:80},
          {quantity:"Full", price:140}
      
      ];

      $scope.detailsDal=
      [  {quantity:"Quarter", price:40},
         {quantity:"Half", price:60},
         {quantity:"Full", price:120}
     
     ];

   
     

      $scope.addToCart=function(obj){

        $scope.found=0;

        if(obj.item_id.quantity==null){
          M.toast({html:'Please Select Quantity !'}); 
        }
        else{
          M.toast({html: 'Item Added To Cart'});
     
          console.log(obj.item_id.price);
                    
              angular.forEach($rootScope.cartObj, function(value, key){
                console.log(key + ': ' + value.item_name);

                if((value.item_name==obj.item_name)&&(value.item_id.quantity==obj.item_id.quantity)){
                  value.itemCount++;
                  value.subtotal=value.itemCount*value.item_id.price;
                  $scope.found=1;
                }
             
             
           });
           if($scope.found==1){

           }
           else {
            obj.itemCount=1;
            obj.subtotal=obj.item_id.price;
            $rootScope.cartObj.push(obj);
           }
                       
         
          console.log($scope.cartObj)
          
        }
      };

     
    
       
    
      });




      app.controller("home",function ($rootScope) {
        $('.carousel.carousel-slider').carousel({
          fullWidth: true
        });
        $rootScope.loggedIn='false';
        $rootScope.cartObj=[];
    
      });

      app.controller("cart",function ($rootScope, $scope) {
        $rootScope.cartObj;

        $scope.increaseItemCount= function (item) {
          console.log(item);
          M.toast({html: 'Added'});
        };
    
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