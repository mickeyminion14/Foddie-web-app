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
            controller :"signup"
        }).when("/dashboard",{
            templateUrl :"./views/dashboard.html",
            controller :"emp1"  
        })  .when("/profile",{
          templateUrl :"./views/profile.html",
          controller :"login"
        }) .when("/",{
          templateUrl :"./views/home.html",
          controller :"home"
      })   .when("/northIndian",{
        templateUrl :"./views/cuisines/northIndian.html",
        controller :"northIndian"
      }) 
      .when("/cart",{
        templateUrl :"./views/cart.html",
        controller :"cart"
    })
    .when("/chinese",{
      templateUrl :"./views/cuisines/chinese.html",
      controller :"chinese"
  })
  .when("/italian",{
    templateUrl :"./views/cuisines/italian.html",
    controller :"italian"
})  
.when("/southIndian",{
  templateUrl :"./views/cuisines/southIndian.html",
  controller :"southIndian"
})
.when("/soups",{
  templateUrl :"./views/cuisines/soups.html",
  controller :"soups"
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

      app.controller("signup", function($rootScope,$scope,$http){
        $scope.first_name;
        $scope.last_name;
        $scope.email;
        $scope.mobile;
        $scope.password;
        $scope.confirm_password;

        $scope.createUser=function () {
          $scope.User={first_name:$scope.first_name,last_name: $scope.last_name,email: $scope.email, password:$scope.password};
          $http.get("/createUser/"+$scope.User).then(function (res) {
            if(res.data.length>0){
              M.toast({html: 'User Already Exists !'});
            }
            else {
              $http.post('/upload', $scope.User)
              .success(function(data) {
             
                  console.log(data +" chrome wala data");
              })
              .error(function(data) {
                  console.log('Error: ' + data);
              });
            }
          });
            
        
        };




        $('input#icon_telephone').characterCounter();
      });

     app.controller("northIndian",function ($rootScope,$scope) {
      $('select').formSelect();
     
      $scope.item1;
      $scope.selectedItem="";
      $scope.selectedItem1=""; 
      $rootScope.cartObj;
      $rootScope.total;
      
      $scope.getTotal= function () {
        $rootScope.total=0;

        angular.forEach($rootScope.cartObj, function(value, key){

              $rootScope.total=value.subtotal+$rootScope.total;

        });

          console.log("total is "+$rootScope.total);

      };

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
                  $scope.getTotal();
                  $scope.found=1;
                }
             
             
           });
           if($scope.found==1){

           }
           else {
            obj.itemCount=1;
            obj.subtotal=obj.item_id.price;
            $rootScope.total=$rootScope.total+obj.subtotal;
            console.log("gadbad total"+$rootScope.total);
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
        $rootScope.total=0;
    
      });

      app.controller("cart",function ($rootScope, $scope) {
        $rootScope.cartObj;
        $rootScope.total;
        $scope.increaseItemCount= function (item) {
          console.log(item);

          angular.forEach($rootScope.cartObj, function(value, key){

            if((value.item_name==item.item_name)&&(value.item_id.quantity==item.item_id.quantity)) {
              value.itemCount++;
              
              value.subtotal=value.itemCount*value.item_id.price;
              $scope.getTotal();
              // console.log(value.subtotal+"  item count");
              // M.toast({html: 'increased'});
            }

            else {

            }
            
          });

          M.toast({html: 'Added'});
        };

        $scope.decreaseItemCount= function (item) {
          console.log(item);

          angular.forEach($rootScope.cartObj, function(value, key){

            if((value.item_name==item.item_name)&&(value.item_id.quantity==item.item_id.quantity)) {
              value.itemCount--;
              
              value.subtotal=value.itemCount*value.item_id.price;
              $scope.getTotal();
              console.log(value.subtotal+"  item count");
              if(value.itemCount==0){
                $rootScope.cartObj.splice(key,1);
                console.log($rootScope.cartObj)
              }
              // M.toast({html: 'increased'});
            }

            else {

            }
            
          });
          
          M.toast({html: 'Removed'});
        };


        $scope.getTotal= function () {
          $rootScope.total=0;

          angular.forEach($rootScope.cartObj, function(value, key){

                $rootScope.total=value.subtotal+$rootScope.total;

          });

            console.log("total is "+$rootScope.total);

        };
    
      });

     
      app.controller("chinese",function ($rootScope,$scope) {
      
        $rootScope.cartObj;
        $rootScope.total;
        $scope.itemsChineseArr=
        [
        
          {item_id:"item1" ,item_name: "Spring Roll", item_img: "./images/cuisines/chinese/sprr.jpg"}, 
          {item_id:"item2" ,item_name: " Veg Manchurian", item_img: "./images/cuisines/chinese/manch.jpg"}, 
          {item_id:"item3" ,item_name: "Fried Rice", item_img: "./images/cuisines/chinese/friedr.jpg"},
          {item_id:"item4" ,item_name: "Honey Chilli Potato ", item_img: "./images/cuisines/chinese/honeycp.jpg"},
          {item_id:"item5" ,item_name: "Chilli Potato", item_img: "./images/cuisines/chinese/chillip.jpg"},
          {item_id:"item6" ,item_name: "Chilli Mushroom", item_img: "./images/cuisines/chinese/chillim.jpg"},
          {item_id:"item7" ,item_name: "Chilli Paneer", item_img: "./images/cuisines/chinese/chillipaneer.jpg"},
          {item_id:"item8" ,item_name: "Veg Noodles", item_img: "./images/cuisines/chinese/noodlesv.jpg"},
          {item_id:"item9" ,item_name: "Schezwan Noodles", item_img: "./images/cuisines/chinese/noodless.jpg"},
          {item_id:"item10" ,item_name: "Haka Noodles", item_img: "./images/cuisines/chinese/noodlesh.jpg"},
          {item_id:"item11" ,item_name: "Egg Noodles", item_img: "./images/cuisines/chinese/noodlese.jpg"}
          
        ];

        $scope.detailsChinese=
       [  {quantity:"Quarter", price:40},
          {quantity:"Half", price:80},
          {quantity:"Full", price:140}
      
      ];

        $scope.getTotal= function () {
          $rootScope.total=0;

          angular.forEach($rootScope.cartObj, function(value, key){

                $rootScope.total=value.subtotal+$rootScope.total;

          });

            console.log("total is "+$rootScope.total);

        };

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
                    $scope.getTotal();
                    $scope.found=1;
                  }
               
               
             });
             if($scope.found==1){
  
             }
             else {
              obj.itemCount=1;
              obj.subtotal=obj.item_id.price;
              $rootScope.total=$rootScope.total+obj.subtotal;
              console.log("gadbad total"+$rootScope.total);
              $rootScope.cartObj.push(obj);
             }
                         
           
            console.log($scope.cartObj)
            
          }
        };

        });

        app.controller("italian",function ($rootScope,$scope) {
      
          $rootScope.cartObj;
          $rootScope.total;
          $scope.itemsItalianPizzaArr=
          [
          
            {item_id:"item1" ,item_name: "CHEESE MARGHERITA", item_img: "./images/cuisines/italian/margherita.png"}, 
            {item_id:"item2" ,item_name: "CHEESE N CORN", item_img: "./images/cuisines/italian/cheesencorn.png"}, 
            {item_id:"item3" ,item_name: "5 PEPPER", item_img: "./images/cuisines/italian/5pepper.png"},
            {item_id:"item4" ,item_name: "FARMHOUSE", item_img: "./images/cuisines/italian/farmhouse.png"},
            {item_id:"item5" ,item_name: "PEPPY PANEER", item_img: "./images/cuisines/italian/peppypaneer.png"},
            {item_id:"item6" ,item_name: "VEG EXTRAVAGANZA", item_img: "./images/cuisines/italian/vegextra.png"},
          
            
          ];
  
          $scope.detailsItalianPizza=
         [  {quantity:"Quarter (serves 1)", price:120},
            {quantity:"Half (serves 2)", price:180},
            {quantity:"Full (serves 4)", price:320}
        
        ];

        $scope.itemsItalianPastaArr=
        [
        
          {item_id:"item1" ,item_name: "WHITE PASTA", item_img: "./images/cuisines/italian/whitepasta.jpg"}, 
          {item_id:"item2" ,item_name: "RED PASTA", item_img: "./images/cuisines/italian/redpasta.jpg"}, 
          {item_id:"item3" ,item_name: "PINK PASTA", item_img: "./images/cuisines/italian/pinkpasta.jpg"}

        
          
        ];

        $scope.detailsItalianPasta=
       [  {quantity:"Quarter (serves 1)", price:80},
          {quantity:"Half (serves 2)", price:160},
          {quantity:"Full (serves 4)", price:300}
      
      ];
  
          $scope.getTotal= function () {
            $rootScope.total=0;
  
            angular.forEach($rootScope.cartObj, function(value, key){
  
                  $rootScope.total=value.subtotal+$rootScope.total;
  
            });
  
              console.log("total is "+$rootScope.total);
  
          };
  
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
                      $scope.getTotal();
                      $scope.found=1;
                    }
                 
                 
               });
               if($scope.found==1){
    
               }
               else {
                obj.itemCount=1;
                obj.subtotal=obj.item_id.price;
                $rootScope.total=$rootScope.total+obj.subtotal;
                console.log("gadbad total"+$rootScope.total);
                $rootScope.cartObj.push(obj);
               }
                           
             
              console.log($scope.cartObj)
              
            }
          };
  
          });


          app.controller("southIndian",function ($rootScope,$scope) {
            $('.parallax').parallax();
            $rootScope.cartObj;
            $rootScope.total;
            $scope.itemsSouthIndianArr=
            [
            
              {item_id:"item1" ,item_name: "Idli Sambhar", item_img: "./images/cuisines/southIndian/idli.jpg"}, 
              {item_id:"item2" ,item_name: "Plain Dosa with Sambar", item_img: "./images/cuisines/southIndian/plaindosa.jpg"}, 
              {item_id:"item3" ,item_name: "Masala Dosa with Sambar", item_img: "./images/cuisines/southIndian/masaladosa.jpg"},
              {item_id:"item4" ,item_name: "Paneer Dosa with Sambar", item_img: "./images/cuisines/southIndian/paneerdosa.jpg"},
              {item_id:"item5" ,item_name: "Sambar Vada", item_img: "./images/cuisines/southIndian/vadasam.jpg"}
           
            ];
    
            $scope.detailsSouthIndian=
           [  {quantity:"Quarter (serves 1)", price:60},
              {quantity:"Half (serves 2)", price:100},
              {quantity:"Full (serves 4)", price:180}
          
          ];
    
            $scope.getTotal= function () {
              $rootScope.total=0;
    
              angular.forEach($rootScope.cartObj, function(value, key){
    
                    $rootScope.total=value.subtotal+$rootScope.total;
    
              });
    
                console.log("total is "+$rootScope.total);
    
            };
    
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
                        $scope.getTotal();
                        $scope.found=1;
                      }
                   
                   
                 });
                 if($scope.found==1){
      
                 }
                 else {
                  obj.itemCount=1;
                  obj.subtotal=obj.item_id.price;
                  $rootScope.total=$rootScope.total+obj.subtotal;
                  console.log("gadbad total"+$rootScope.total);
                  $rootScope.cartObj.push(obj);
                 }
                             
               
                console.log($scope.cartObj)
                
              }
            };
    
            });



            app.controller("soups",function ($rootScope,$scope) {
      
              $rootScope.cartObj;
              $rootScope.total;
              $scope.itemsSoupsArr=
              [
              
                {item_id:"item1" ,item_name: "Tomato Soup", item_img: "./images/cuisines/soups/tomato.jpg"}, 
                {item_id:"item2" ,item_name: "Hot and Sour Soup", item_img: "./images/cuisines/soups/hotnsour.jpg"}, 
                {item_id:"item3" ,item_name: "Cream and Corn Soup", item_img: "./images/cuisines/soups/creamncorn.jpg"},
                {item_id:"item4" ,item_name: "Manchow Soup", item_img: "./images/cuisines/soups/manchow.jpg"}          
              ];
      
              $scope.detailsSoups=
             [  
                {quantity:"Half (serves 1)", price:40},
                {quantity:"Full (serves 2)", price:70}
            
            ];
      
              $scope.getTotal= function () {
                $rootScope.total=0;
      
                angular.forEach($rootScope.cartObj, function(value, key){
      
                      $rootScope.total=value.subtotal+$rootScope.total;
      
                });
      
                  console.log("total is "+$rootScope.total);
      
              };
      
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
                          $scope.getTotal();
                          $scope.found=1;
                        }
                     
                     
                   });
                   if($scope.found==1){
        
                   }
                   else {
                    obj.itemCount=1;
                    obj.subtotal=obj.item_id.price;
                    $rootScope.total=$rootScope.total+obj.subtotal;
                    console.log("gadbad total"+$rootScope.total);
                    $rootScope.cartObj.push(obj);
                   }
                               
                 
                  console.log($scope.cartObj)
                  
                }
              };
      
              });

              app.controller("salads",function ($rootScope,$scope) {
      
                $rootScope.cartObj;
                $rootScope.total;
                $scope.itemsSaladsArr=
                [
                
                  {item_id:"item1" ,item_name: "Tomato Soup", item_img: "./images/cuisines/soups/tomato.jpg"}, 
                  {item_id:"item2" ,item_name: "Hot and Sour Soup", item_img: "./images/cuisines/soups/hotnsour.jpg"}, 
                  {item_id:"item3" ,item_name: "Cream and Corn Soup", item_img: "./images/cuisines/soups/creamncorn.jpg"},
                  {item_id:"item4" ,item_name: "Manchow Soup", item_img: "./images/cuisines/soups/manchow.jpg"}          
                ];
        
                $scope.detailsSalads=
               [  
                  {quantity:"Half (serves 1)", price:60},
                  {quantity:"Full (serves 2)", price:100}
              
              ];
        
                $scope.getTotal= function () {
                  $rootScope.total=0;
        
                  angular.forEach($rootScope.cartObj, function(value, key){
        
                        $rootScope.total=value.subtotal+$rootScope.total;
        
                  });
        
                    console.log("total is "+$rootScope.total);
        
                };
        
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
                            $scope.getTotal();
                            $scope.found=1;
                          }
                       
                       
                     });
                     if($scope.found==1){
          
                     }
                     else {
                      obj.itemCount=1;
                      obj.subtotal=obj.item_id.price;
                      $rootScope.total=$rootScope.total+obj.subtotal;
                      console.log("gadbad total"+$rootScope.total);
                      $rootScope.cartObj.push(obj);
                     }
                                 
                   
                    console.log($scope.cartObj)
                    
                  }
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