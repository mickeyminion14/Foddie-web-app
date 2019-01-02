angular.module("CartCtrl",[]).controller("CartController", function ($rootScope, $scope, $localStorage, $location){
    $('.modal').modal(); 
    $("#main").removeClass("home");
    $('#main').addClass("bgimg");
  $rootScope.cartObj=$localStorage.cartObj || [];
   $rootScope.total;
  
   $rootScope.lol="sarthak";
   $scope.checkOut = function () {
    $location.path("/processorder");
     console.log($rootScope.cartObj);

   }

   $scope.increaseItemCount = function (item) {
     console.log(item);

     angular.forEach($rootScope.cartObj, function (value, key) {

       if ((value.item_name == item.item_name) && (value.item_id.quantity == item.item_id.quantity)) {
         value.itemCount++;

         value.subtotal = value.itemCount * value.item_id.price;
         $scope.getTotal();
         // console.log(value.subtotal+"  item count");
         // M.toast({html: 'increased'});
       } else {

       }

     });

     M.toast({
       html: 'Added'
     });
   };

   $scope.decreaseItemCount = function (item) {
     console.log(item);

     angular.forEach($rootScope.cartObj, function (value, key) {

       if ((value.item_name == item.item_name) && (value.item_id.quantity == item.item_id.quantity)) {
         value.itemCount--;

         value.subtotal = value.itemCount * value.item_id.price;
         $scope.getTotal();
         console.log(value.subtotal + "  item count");
         if (value.itemCount == 0) {
           $rootScope.cartObj.splice(key, 1);
           console.log($rootScope.cartObj)
         }
         // M.toast({html: 'increased'});
       } else {

       }

     });

     M.toast({
       html: 'Removed'
     });
   };


   $scope.getTotal = function () {
     $rootScope.total = 0;

     angular.forEach($rootScope.cartObj, function (value, key) {

       $rootScope.total = value.subtotal + $rootScope.total;

     });
     $localStorage.total=$rootScope.total;
     console.log("total is " + $rootScope.total);

   };
});
