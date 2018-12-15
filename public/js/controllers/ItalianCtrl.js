angular.module("ItalianCtrl",[]).controller("ItalianController", function ($rootScope, $scope){
  $("#main").removeClass("home");
  $('#main').addClass("bgimg");
  $rootScope.cartObj;
  $rootScope.total;
  $scope.itemsItalianPizzaArr = [

    {
      item_id: "item1",
      item_name: "CHEESE MARGHERITA",
      item_img: "./images/cuisines/italian/margherita.png"
    },
    {
      item_id: "item2",
      item_name: "CHEESE N CORN",
      item_img: "./images/cuisines/italian/cheesencorn.png"
    },
    {
      item_id: "item3",
      item_name: "5 PEPPER",
      item_img: "./images/cuisines/italian/5pepper.png"
    },
    {
      item_id: "item4",
      item_name: "FARMHOUSE",
      item_img: "./images/cuisines/italian/farmhouse.png"
    },
    {
      item_id: "item5",
      item_name: "PEPPY PANEER",
      item_img: "./images/cuisines/italian/peppypaneer.png"
    },
    {
      item_id: "item6",
      item_name: "VEG EXTRAVAGANZA",
      item_img: "./images/cuisines/italian/vegextra.png"
    },


  ];

  $scope.detailsItalianPizza = [{
      quantity: "Quarter (serves 1)",
      price: 120
    },
    {
      quantity: "Half (serves 2)",
      price: 180
    },
    {
      quantity: "Full (serves 4)",
      price: 320
    }

  ];

  $scope.itemsItalianPastaArr = [

    {
      item_id: "item1",
      item_name: "WHITE PASTA",
      item_img: "./images/cuisines/italian/whitepasta.jpg"
    },
    {
      item_id: "item2",
      item_name: "RED PASTA",
      item_img: "./images/cuisines/italian/redpasta.jpg"
    },
    {
      item_id: "item3",
      item_name: "PINK PASTA",
      item_img: "./images/cuisines/italian/pinkpasta.jpg"
    }



  ];

  $scope.detailsItalianPasta = [{
      quantity: "Quarter (serves 1)",
      price: 80
    },
    {
      quantity: "Half (serves 2)",
      price: 160
    },
    {
      quantity: "Full (serves 4)",
      price: 300
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
