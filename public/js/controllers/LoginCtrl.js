// app.controller("home", function ($rootScope, $scope, $location, $window, $localStorage) {
  angular.module("LoginCtrl",[]).controller("LoginController", function ($rootScope, $location, $scope, $timeout, $http, $window, $localStorage){
    $("#main").removeClass("home");
    $('#main').addClass("bgimg");
    $localStorage.User;
    $localStorage.loggedIn;
    $scope.formData = {};
    $scope.formData.email;
    $scope.formData.password;
    $scope.loc = $location.absUrl();
 
    $rootScope.User = $localStorage.User || null;
    console.log($localStorage.User);
 
    $rootScope.validateLogin = function (email, password) {
      $("#subBtn").removeClass("scale-in");
      $('#subBtn').addClass("scale-out");
      $('#loader').css("visibility", "visible");
 
      $http.post('/validateLogin', $scope.formData)
        .success(function (data) {
 
          console.log(data);
          if (data.ok == 1) {
            M.toast({
              html: ' Login Sucessfull. ',
              displayLength: 3000
            });
 
 
            $rootScope.User = data;
            $rootScope.loggedIn = 'true';
            $localStorage.loggedIn = $rootScope.loggedIn;
            $localStorage.User = $rootScope.User;
            $location.path('/profile');
          } else {
            $rootScope.loggedIn = 'false';
            $localStorage.loggedIn = $rootScope.loggedIn;
            $timeout(function () {
              // $location.path('/404');
              $scope.formData = {};
              $scope.myForm.$setPristine();
              $('#subBtn').removeClass("scale-out");
              $('#subBtn').addClass("scale-in");
              $('#loader').css("visibility", "hidden");
              M.toast({
                html: ' PASSWORD OR EMAIL INCORRECT ',
                displayLength: 3000
              })
            }, 3000);
          }
 
 
        })
        .error(function (data) {
          console.log('Error: ' + data);
        });
 
    }
  
    
    });
