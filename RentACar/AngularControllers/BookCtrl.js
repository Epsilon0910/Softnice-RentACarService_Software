rentapp.controller('BookCtrl', function ($scope) {
    $scope.cusname = '';
    $scope.cusnumber = '';
    $scope.email = '';
  
    $scope.savecardetails = function () {
        $scope.myForm.submitted = true
        $scope.myForm.$valid
        
    }
});
