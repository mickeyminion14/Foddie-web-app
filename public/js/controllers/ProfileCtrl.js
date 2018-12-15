angular.module("ProfileCtrl",[]).controller("ProfileController", function ($rootScope, $scope, $localStorage){
  
  $("#main").removeClass("home");
  $('#main').addClass("bgimg");
  $('.materialboxed').materialbox();
  $rootScope.cartObj;
  $rootScope.total;
  $localStorage.User;
  $rootScope.User = $localStorage.User || null;
  $rootScope.loggedIn;
  
  $scope.pastOrders = function () {
    M.toast({
      html: 'Item Added To Cart'
    });
  };
});
