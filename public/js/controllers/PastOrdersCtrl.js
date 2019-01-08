angular.module("PastOrdersCtrl",[]).controller("PastOrdersController", function ($rootScope, $scope, $localStorage, $http, $location, $window){
  $("#main").removeClass("home");
  $('#main').addClass("bgimg");

  $rootScope.pastorders={};
  $rootScope.temp;
  $rootScope.cartObj;
  $rootScope.total;
  $localStorage.User;
  $rootScope.User = $localStorage.User || null;
  $rootScope.loggedIn;
  $rootScope.orderindex=0;
  $rootScope.finalpastorders;
  console.log("past orders ctrl");
  $scope.datarecieved=false;
  $scope.currentindex=0;

  $scope.totalpast=0;
  $scope.getTotal(0);
  // const ordersProcessedArray = {};

  $scope.pastorderDetails = {user : $rootScope.User } ;
  $http.post('/pastorders', $scope.pastorderDetails)
  .success(function (data) {
    $rootScope.temp=data;
  //  const responseData = data.response;
  //  console.log(responseData);
  //  responseData.forEach((value, index) => {
  //   // console.log("order: " + index);
  //   const id = index;
  //   $rootScope.pastorders[id] = new Array();
  //   // responseData.forEach((value, index) => {
  //     $rootScope.pastorders[id].push(value);
  //   // });
  //  });
  //  console.log($rootScope.pastorders);
   console.log($rootScope.temp.response[11]);
   $scope.datarecieved=true;
  
   
  //  for (var i = 0; i < $rootScope.temp.response.length; i++) {

    // if(i==11) {
    // console.log( $rootScope.temp.response[i]);

    
  // }
   
  //  }

  //  console.log($rootScope.pastorders);
  $rootScope.finalpastorders=$rootScope.temp.response[1];
  $scope.getTotal(0);
  })
  .error(function (data) {
    console.log('Error: ' + data);
  });
  

  $scope.getTotal = function (index) {
    $scope.currentindex=index;
    console.log("total function called");
    console.log(index);

    angular.forEach($rootScope.temp.response[index], function (value, key) {

      $scope.totalpast = value.subtotal + $scope.totalpast;

    });
  };

  $scope.onPagination = function (index) {
    if(index==0) {
      $("#back").addClass("disabled");
      $("#forward").removeClass("disabled");
    }
    if(index >0) {
      $("#back").removeClass("disabled");
    }
    // console.log($rootScope.temp.response.length);
    if(index == $rootScope.temp.response.length-1) {
      $("#forward").addClass("disabled");
      $("#back").removeClass("disabled");
    }

    if(index < $rootScope.temp.response.length-1) {
      $("#forward").removeClass("disabled");
    }
    $scope.currentindex=index;
    $scope.totalpast=0;
    console.log(index);
    $rootScope.finalpastorders=$rootScope.temp.response[index];
    $scope.getTotal(index);
    console.log($('#paginationTabs').get());
  };

  $scope.onPaginationBack = function () {
    if($scope.currentindex==0) {

    }
  }

  $scope.onPaginationForward = function () {

  }
});
