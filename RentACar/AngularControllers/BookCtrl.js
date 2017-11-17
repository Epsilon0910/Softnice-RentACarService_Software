rentapp.controller('BookCtrl', function ($scope, $location) {
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
    $scope.pageload = function () {
        var abc = getUrlParameter('BAC', $location.absUrl())
       
        if (abc == '2')
        {
            $scope.buttonnext = false;

            $scope.buttonsave = true;
      
          
        }
        if (abc == '3')
        {
            $scope.buttonsave = false;
            $scope.buttonnext = true;
       
        }

    }
    $scope.pageload();
   
   

});
