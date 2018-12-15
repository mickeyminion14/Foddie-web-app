angular.module("ChineseCtrl",[]).controller("ChineseController", function ($rootScope, $scope){
  $("#main").removeClass("home");
   $('#main').addClass("bgimg");
   $rootScope.cartObj;
   $rootScope.total;
   $scope.itemsChineseArr = [

     {
       item_id: "item1",
       item_name: "Spring Roll",
       item_img: "./images/cuisines/chinese/sprr.jpg"
     },
     {
       item_id: "item2",
       item_name: " Veg Manchurian",
       item_img: "./images/cuisines/chinese/manch.jpg"
     },
     {
       item_id: "item3",
       item_name: "Fried Rice",
       item_img: "./images/cuisines/chinese/friedr.jpg"
     },
     {
       item_id: "item4",
       item_name: "Honey Chilli Potato ",
       item_img: "./images/cuisines/chinese/honeycp.jpg"
     },
     {
       item_id: "item5",
       item_name: "Chilli Potato",
       item_img: "./images/cuisines/chinese/chillip.jpg"
     },
     {
       item_id: "item6",
       item_name: "Chilli Mushroom",
       item_img: "./images/cuisines/chinese/chillim.jpg"
     },
     {
       item_id: "item7",
       item_name: "Chilli Paneer",
       item_img: "./images/cuisines/chinese/chillipaneer.jpg"
     },
     {
       item_id: "item8",
       item_name: "Veg Noodles",
       item_img: "./images/cuisines/chinese/noodlesv.jpg"
     },
     {
       item_id: "item9",
       item_name: "Schezwan Noodles",
       item_img: "./images/cuisines/chinese/noodless.jpg"
     },
     {
       item_id: "item10",
       item_name: "Haka Noodles",
       item_img: "./images/cuisines/chinese/noodlesh.jpg"
     },
     {
       item_id: "item11",
       item_name: "Egg Noodles",
       item_img: "./images/cuisines/chinese/noodlese.jpg"
     }

   ];

   $scope.detailsChinese = [{
       quantity: "Quarter",
       price: 40
     },
     {
       quantity: "Half",
       price: 80
     },
     {
       quantity: "Full",
       price: 140
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
