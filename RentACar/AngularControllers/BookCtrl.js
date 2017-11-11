rentapp.controller('BookCtrl', function ($scope) {
    $scope.cusname = '';
    $scope.cusnumber = '';
    $scope.email = '';
    $scope.CountryList = [{ Name: 'India', ID: '1' }, { Name: 'KSA', ID: '2' }]
    $scope.CountrycodeList = [{ Name: '+1', ID: 'United States' }, { Name: '+972', ID: 'Italy' }]
    $scope.CurrencyList=[{Name:'$', ID: '1'}, {Name:'INR', ID:'2'}]
  
    $scope.savecardetails = function () {
        $scope.myForm.submitted = true
        $scope.myForm.$valid
        
    }
});
