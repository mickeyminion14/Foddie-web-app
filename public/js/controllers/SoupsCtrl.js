angular.module("SoupsCtrl",[]).controller("SoupsController", function ($rootScope, $scope){
  $("#main").removeClass("home");
  $('#main').addClass("bgimg");
  $rootScope.cartObj;
  $rootScope.total;
  $scope.itemsSoupsArr = [

    {
      item_id: "item1",
      item_name: "Tomato Soup",
      item_img: "./images/cuisines/soups/tomato.jpg"
    },
    {
      item_id: "item2",
      item_name: "Hot and Sour Soup",
      item_img: "./images/cuisines/soups/hotnsour.jpg"
    },
    {
      item_id: "item3",
      item_name: "Cream and Corn Soup",
      item_img: "./images/cuisines/soups/creamncorn.jpg"
    },
    {
      item_id: "item4",
      item_name: "Manchow Soup",
      item_img: "./images/cuisines/soups/manchow.jpg"
    }
  ];

  $scope.detailsSoups = [{
      quantity: "Half (serves 1)",
      price: 40
    },
    {
      quantity: "Full (serves 2)",
      price: 70
    }

  ];

  $scope.getTotal = function () {
    $rootScope.total = 0;

    angular.forEach($rootScope.cartObj, function (value, key) {

      $rootScope.total = value.subtotal + $rootScope.total;

    });

    console.log("total is " + $rootScope.total);

  };

  $scope.addToCart = function (obj) {

    $scope.found = 0;

    if (obj.item_id.quantity == null) {
      M.toast({
        html: 'Please Select Quantity !'
      });
    } else {
      M.toast({
        html: 'Item Added To Cart'
      });

      console.log(obj.item_id.price);

      angular.forEach($rootScope.cartObj, function (value, key) {
        console.log(key + ': ' + value.item_name);

        if ((value.item_name == obj.item_name) && (value.item_id.quantity == obj.item_id.quantity)) {
          value.itemCount++;
          value.subtotal = value.itemCount * value.item_id.price;
          $scope.getTotal();
          $scope.found = 1;
        }


      });
      if ($scope.found == 1) {

      } else {
        obj.itemCount = 1;
        obj.subtotal = obj.item_id.price;
        $rootScope.total = $rootScope.total + obj.subtotal;
        console.log("gadbad total" + $rootScope.total);
        $rootScope.cartObj.push(obj);
      }


      console.log($scope.cartObj)

    }
  };
});
