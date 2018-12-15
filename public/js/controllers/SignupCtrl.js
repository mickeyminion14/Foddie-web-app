// app.controller("home", function ($rootScope, $scope, $location, $window, $localStorage) {
  angular.module("SignupCtrl",[]).controller("SignupController", function ($rootScope, $scope, $http, $location, $timeout){
    $("#main").removeClass("home");
    $('#main').addClass("bgimg");
    $scope.formData = {};
    $scope.loc = $location.absUrl();
    $scope.formData.first_name;
    $scope.formData.last_name;
    $scope.formData.email;
    $scope.formData.mobile;
    $scope.formData.password;
    $scope.formData.confirm_password;
    $scope.formData.profile_image;
 
 
    $scope.createUser = function () {
      //  $("#subBtn").removeClass("scale-in");
      $('#subBtn').addClass("scale-out");
      $('#loader').css("visibility", "visible");
      //  $scope.User = {
      //    first_name: $scope.first_name,
      //    last_name: $scope.last_name,
      //    email: $scope.email,
      //    mobile:$scope.mobile,
      //    password: $scope.password,
      //  };
      let form_custom = new FormData();
      form_custom.append('first_name', $scope.formData.first_name);
      form_custom.append('last_name', $scope.formData.last_name);
      form_custom.append('email', $scope.formData.email);
      form_custom.append('mobile', $scope.formData.mobile);
      form_custom.append('profile_imageUrl', '')
      form_custom.append('password', $scope.formData.password);
      // add check document.getElementById('profile_image').files[0] === undefined
      if (!(document.getElementById('profile_image').files[0] == undefined || null)) {
        form_custom.append('profile_image', document.getElementById('profile_image').files[0]);
      }
      console.log($scope.formData);
 
      $http.post('/createUser', form_custom, {
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          }
        })
        .success(function (data) {
 
          console.log(data);
          if (!data.error) {
            M.toast({
              html: "User profile Created successfully !",
              displayLength: 3000
            });
            $location.path('/login');
          } else {
            if (data.mssg.email == $scope.formData.email) {
              $timeout(function () {
 
                $scope.formData = {};
                $scope.myForm.$setPristine();
                $('#subBtn').removeClass("scale-out");
                $('#subBtn').addClass("scale-in");
                $('#loader').css("visibility", "hidden");
                M.toast({
                  html: "An Account Already Exists With the entered email !",
                  displayLength: 3000
                });
              }, 3000);
            }
 
            if (data.mssg.mobile == $scope.formData.mobile) {
 
 
              $timeout(function () {
                // $location.path('/home');
                $scope.formData = {};
                $scope.myForm.$setPristine();
 
                $('#subBtn').removeClass("scale-out");
                $('#subBtn').addClass("scale-in");
                $('#loader').css("visibility", "hidden");
                M.toast({
                  html: "An Account Already Exists With the entered mobile number !",
                  displayLength: 3000
                });
              }, 3000);
            }
          }
 
        })
        .error(function (data) {
          console.log('Error: ' + data);
        });
 
    };
 
 
 
 
    $('input#icon_telephone').characterCounter();
  
    
    });
