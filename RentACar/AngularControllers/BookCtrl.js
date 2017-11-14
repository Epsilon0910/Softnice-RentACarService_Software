rentapp.controller('BookCtrl', function ($scope) {
    $scope.cusname = '';
    $scope.cusnumber = '';
    $scope.email = '';
    $scope.alternateCountrycodeList = [{ Name: '+1', ID: 'United States' }, { Name: '+972', ID: 'Italy' }]
    $scope.CountrycodeList = [{ Name: '+1', ID: 'United States' }, { Name: '+972', ID: 'Italy' }]
    $scope.PaymentStatusList=[{Name:'Initial payment', ID:'1'}, {Name: 'Full Payment', ID:'2'}]
  
    $scope.savecardetails = function () {
        $scope.myForm.submitted = true
        $scope.myForm.$valid
        
    }
});
