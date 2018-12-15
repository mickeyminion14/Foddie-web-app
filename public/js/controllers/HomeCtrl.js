// app.controller("home", function ($rootScope, $scope, $location, $window, $localStorage) {
  angular.module("HomeCtrl",[]).controller("HomeController", function ($rootScope, $scope, $location, $window, $localStorage){
  $("#main").removeClass("bgimg");
  $('#main').addClass("home");
  $rootScope.loggedIn = $localStorage.loggedIn || 'false';
  //  if($rootScope.loggedIn=="true") {}
  $localStorage.cartObj;
  $rootScope.cartObj = [];
  
  $rootScope.total = 0;
  $rootScope.User;

  $scope.logout = function () {

    $rootScope.loggedIn = 'false';
    M.toast({
      html: "Logged Out Successfully !"
    });
    $window.localStorage.setItem("loggedIn", "false");
    $location.path("/login");

  }
  });