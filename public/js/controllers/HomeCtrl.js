// app.controller("home", function ($rootScope, $scope, $location, $window, $localStorage) {
  angular.module("HomeCtrl",[]).controller("HomeController", function ($rootScope, $scope, $location, $window, $localStorage){
  $("#main").removeClass("bgimg");
  $('#main').addClass("home");
  $rootScope.loggedIn = $localStorage.loggedIn || 'false';
  //  if($rootScope.loggedIn=="true") {}
  $localStorage.cartObj;
  $rootScope.cartObj = $localStorage.cartObj||[];
  
  $rootScope.total = $localStorage.total || 0;
  $rootScope.User;

  $scope.logout = function () {

    $rootScope.loggedIn = 'false';
    M.toast({
      html: "Logged Out Successfully !"
    });
    $localStorage.loggedIn= "false";
    $localStorage.cartObj="";
    $localStorage.total=0;
    $location.path("/login");

  }



  $scope.getTotal = function () {
    $rootScope.total = 0;

    angular.forEach($rootScope.cartObj, function (value, key) {

      $rootScope.total = value.subtotal + $rootScope.total;

    });
    $localStorage.total=$rootScope.total;
    console.log("total is " + $rootScope.total);

  };
  });