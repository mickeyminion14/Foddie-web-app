angular.module("ProfileCtrl",[]).controller("ProfileController", function ($rootScope, $scope, $localStorage, $location){
  
  $("#main").removeClass("home");
  $('#main').addClass("bgimg");
  $('.materialboxed').materialbox();
  $rootScope.NavBarVisibilty = "true";
  $rootScope.MobileNavBarVisibilty = "true";  
  $rootScope.cartObj;
  $rootScope.total;
  $localStorage.User;
  $rootScope.User = $localStorage.User || null;
  $rootScope.loggedIn;
  
  $scope.pastOrders = function () {
  $location.path('/pastorders');
  };
});
