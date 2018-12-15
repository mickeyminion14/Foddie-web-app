angular.module("SouthindianCtrl",[]).controller("SouthindianController", function ($rootScope, $scope){
  $("#main").removeClass("home");
   $('#main').addClass("bgimg");
   $rootScope.cartObj;
   $rootScope.total;
   $scope.itemsSouthIndianArr = [

     {
       item_id: "item1",
       item_name: "Idli Sambhar",
       item_img: "./images/cuisines/southIndian/idli.jpg"
     },
     {
       item_id: "item2",
       item_name: "Plain Dosa with Sambar",
       item_img: "./images/cuisines/southIndian/plaindosa.jpg"
     },
     {
       item_id: "item3",
       item_name: "Masala Dosa with Sambar",
       item_img: "./images/cuisines/southIndian/masaladosa.jpg"
     },
     {
       item_id: "item4",
       item_name: "Paneer Dosa with Sambar",
       item_img: "./images/cuisines/southIndian/paneerdosa.jpg"
     },
     {
       item_id: "item5",
       item_name: "Sambar Vada",
       item_img: "./images/cuisines/southIndian/vadasam.jpg"
     }

   ];

   $scope.detailsSouthIndian = [{
       quantity: "Quarter (serves 1)",
       price: 60
     },
     {
       quantity: "Half (serves 2)",
       price: 100
     },
     {
       quantity: "Full (serves 4)",
       price: 180
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
