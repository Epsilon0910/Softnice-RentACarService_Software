rentapp.controller('OrdersCtrl', function ($scope, $http) {
    $http({
        method: 'POST',
        url: 'http://localhost:55572/api/OrderServices/OrderList'
    }).then(function success(response) {
        $scope.Order = response.data.Table[0];
        console.log(response.data.Table[0]);
    }, function error(error) {
        alert("Sorry, We are not able to get orders list because of some technical error. Please try again after some time" + error);
    });
});



