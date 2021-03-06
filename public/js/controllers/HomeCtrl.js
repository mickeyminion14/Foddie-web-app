// app.controller("home", function ($rootScope, $scope, $location, $window, $localStorage) {
  angular.module("HomeCtrl",[]).controller("HomeController", function ($rootScope,$http, $scope, $location, $window, $localStorage){
  $("#main").removeClass("bgimg");
  $('#main').addClass("home");
  $rootScope.NavBarVisibilty = "true";
  $rootScope.MobileNavBarVisibilty = "true";  
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
    $rootScope.total=0;
    $localStorage.total=0;
    $localStorage.User = "";
    $rootScope.User="";
    $location.path("/login");

  }

  // $scope.sendEmail = function () {
  //   // console.log("email function called");
  //   console.log($rootScope.User);
  //   $http.post('/sendEmail', $rootScope.User)
  //       .success(function (data) {
  //         console.log(data);
  //         console.log(data.data1);
  //       })
  //       .error(function (data) {
  //         console.log('Error: ' + data);
  //       });
  // }



  $scope.getTotal = function () {
    $rootScope.total = 0;

    angular.forEach($rootScope.cartObj, function (value, key) {

      $rootScope.total = value.subtotal + $rootScope.total;

    });
    $localStorage.total=$rootScope.total;
    console.log("total is " + $rootScope.total);

  };
  });