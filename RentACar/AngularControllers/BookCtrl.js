rentapp.controller('BookCtrl', function ($scope) {
    $scope.cusname = '';
    $scope.cusnumber = '';
    $scope.email = '';
    $scope.CountrycodeList = [{ Name: '+1', ID: 'United States' }, { Name: '+972', ID: 'Italy' }]
  
    $scope.savecardetails = function () {
        $scope.myForm.submitted = true
        $scope.myForm.$valid
        
    }
});
