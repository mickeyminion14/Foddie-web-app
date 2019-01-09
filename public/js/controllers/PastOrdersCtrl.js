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
  $scope.newindex=0;
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
  $rootScope.finalpastorders=$rootScope.temp.response[0];
  $scope.getTotal(0);

  })
  .error(function (data) {
    console.log('Error: ' + data);
  });
  

  $scope.getTotal = function (index) {
    $scope.currentindex=index;
    console.log("total function called");
    console.log(index);
    // if(index == 0) {
    //   $("li").removeClass("active"); 
    //   $("#0").parent().addClass("active");
    //   console.log($("#"+0).parent());
    //    $("#"+0).parent().addClass("active");
    //   // console.log(document.getElementsByTagName("li")[1]);
    //   console.log("added");
    // } 

    angular.forEach($rootScope.temp.response[index], function (value, key) {

      $scope.totalpast = value.subtotal + $scope.totalpast;

    });
  };

  $scope.onPagination = function (index) {
    $("li").removeClass("active"); 
    console.log(  $("#"+index).parent());
    $("#"+index).parent().addClass("active");
    if(index == 0) {
     
      $("#back").addClass("disabled");
      $("#forward").removeClass("disabled");
    }
    if(index > 0) {
      $("#back").removeClass("disabled");
    }
    // console.log($rootScope.temp.response.length);
    if(index == $rootScope.temp.response.length - 1) {
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
    $("li").removeClass("active"); 

    

    $scope.newindex=$scope.currentindex-1;
    if($scope.newindex < 0 ){
      $scope.newindex=0;
    }
    if($scope.newindex==0) {
      $("#back").addClass("disabled");
      $("#forward").removeClass("disabled");
    }

    if($scope.newindex > 0) {
      $("#back").removeClass("disabled");
      $("#forward").removeClass("disabled");
    }
    $("#"+$scope.newindex).parent().addClass("active");
    $scope.totalpast=0;
    console.log($scope.newindex);
    $rootScope.finalpastorders=$rootScope.temp.response[$scope.newindex];
    $scope.getTotal($scope.newindex);
    $scope.currentindex=$scope.newindex;

    console.log($scope.currentindex);
  }

  $scope.onPaginationForward = function () {
    $("li").removeClass("active"); 
    $scope.newindex=$scope.currentindex+1;
    if($scope.newindex >  $rootScope.temp.response.length - 1 ){
      $scope.newindex= $rootScope.temp.response.length - 1;
      $("#forward").addClass("disabled");
      $("#back").removeClass("disabled");
    }
    if($scope.newindex== $rootScope.temp.response.length - 1) {
      $("#forward").addClass("disabled");
      $("#back").removeClass("disabled");
    }

    if($scope.newindex <  $rootScope.temp.response.length - 1) {
      $("#forward").removeClass("disabled");
      $("#back").removeClass("disabled");
    }
    $("#"+$scope.newindex).parent().addClass("active");
    $scope.totalpast=0;
    console.log($scope.newindex);
    $rootScope.finalpastorders=$rootScope.temp.response[$scope.newindex];
    $scope.getTotal($scope.newindex);
    $scope.currentindex=$scope.newindex;

    console.log($scope.currentindex);
  }
});
