rentapp.controller('BookCtrl', function ($scope, $http) {
   
    $scope.countryorder = function () {
        var book = new Object();
        book.country = '';
        $http({
            method: 'POST',
            url: "http://localhost:55572/api/OrderServices/Countries",
            data: book
        }).then(function success(response) {
            $scope.Countrylist = response.data.Table
            console.log($scope.Countrylist)
            //window.location.href = "Members";
        },
       function error(error) {
           alert("Some technical error occured: " + error);
       });
    }
    $scope.Order = function () {
        var pay = new Object();
        pay.payment = '';
        $http({
            method: 'POST',
            url: "http://localhost:55572/api/OrderServices/Payment",
            data: pay
        }).then(function success(data) {
            $scope.Paymentstatus = data.data.Table
            console.log($scope.Paymentstatus)
            //window.location.href = "Members";
        },
       function error(error) {
           alert("Some technical error occured: " + error);
       });
    }
    $scope.currency = function () {
        var cur = new Object();
        cur.payment = '';
        $http({
            method: 'POST',
            url: "http://localhost:55572/api/OrderServices/Currency",
            data: cur
        }).then(function success(data) {
            $scope.currencystatus = data.data.Table
            console.log($scope.currencystatus)
            //window.location.href = "Members";
        },
       function error(error) {
           alert("Some technical error occured: " + error);
       });
    }
    $scope.TabShow = function (VAR_SHOW) {
        if (VAR_SHOW == "bookdetails") {
            $('#PaymentTab').removeClass();
            $('#bookdTab').addClass('active');
        }
        else if (VAR_SHOW == "PaymentDetails") {
            $('#PaymentTab').addClass('active');
            $('#bookdTab').removeClass();
        }
    }

    $scope.Order();
    $scope.countryorder();
    $scope.currency();
});
