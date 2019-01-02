angular.module("OrderProcessingCtrl",[]).controller("OrderProcessingController", function ($rootScope, $scope, $localStorage, $http, $location, $window){
  $("#main").removeClass("home");
  $('#main').addClass("bgimg");
  $rootScope.cartObj;
  $rootScope.total;
  $localStorage.User;
  $rootScope.User = $localStorage.User || null;
  $rootScope.loggedIn;
  console.log("order process ctrl");
  $rootScope.NavBarVisibilty = "false";
  $rootScope.MobileNavBarVisibilty = "false";  

  $scope.orderProcessingDetails = {user : $rootScope.User, cartObj : $rootScope.cartObj } ;
  $http.post('/processOrder', $scope.orderProcessingDetails)
  .success(function (data) {
    console.log(data);
    if(data.added==true) {
      // console.log("hello");
      $location.path('/profile');
      $rootScope.NavBarVisibilty = "true";
      $rootScope.MobileNavBarVisibilty = "true";  
      $rootScope.cartObj=[];
      $localStorage.cartObj="";
      $window.location.reload();
    }
  })
  .error(function (data) {
    console.log('Error: ' + data);
  });
  
});
