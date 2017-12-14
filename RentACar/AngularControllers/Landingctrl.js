rentapp.controller('LandingCtrl', function ($scope){

    $scope.yearlist = [{ Name: '2005', ID: '1' }, { Name: '2006', ID: '2' }, { Name: '2007', ID: '3' }]

    
    $scope.makelist = [{ Name: 'Volkswagen', ID: '1' }, { Name: 'BMW', ID: '2' }, { Name: 'Pagani', ID: '2' }]
    

    $scope.Namelist = [{ Name: 'BMW Z1', ID: '1' }, { Name: 'Zonda', ID: '2' }, { Name: 'Audi R8', ID: '3' }]

    $scope.Classlist = [{ Name: 'SUV', ID: '1' }, { Name: 'SEDAN', ID: '2' }, { Name: 'MINI', ID: '3' }]
    $scope.DrivingModeList = [{ Name: 'Self-Driven', ID: '1' }, { Name: 'Driver', ID: '2' }]

    $scope.Picklist = [{ Name: 'Destination', ID: '1' }, { Name: 'Company office', ID: '2' } ]
    
    $scope.add = function () {
        console.log("submitting");
    };
    $scope.changeOption = function () {
        $scope.submitted = false;
    };
});

//l.controller('LandingCtrl', function ($scope) {

//    $scope.date = '';
//});
