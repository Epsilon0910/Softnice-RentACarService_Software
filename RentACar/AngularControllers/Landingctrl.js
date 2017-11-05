rentapp.controller('LandingCtrl', function ($scope){

    $scope.yearlist = [{ Name: '2005', ID: '1' }, { Name: '2006', ID: '2' }, { Name: '2007', ID: '3' }]

    
    var makelist = [{ Name: 'Volkswagen', ID: '1' }, { Name: 'BMW', ID: '2' }, { Name: 'Pagani', ID: '2' }]
    $scope.makelist = makelist;

    $scope.Namelist = [{ Name: 'BMW Z1', ID: '1' }, { Name: 'Zonda', ID: '2' }, { Name: 'Audi R8', ID: '3' }]

    $scope.Classlist = [{ Name: 'SUV', ID: '1' }, { Name: 'SEDAN', ID: '2' }, { Name: 'MINI', ID: '3' }]
});

//l.controller('LandingCtrl', function ($scope) {

//    $scope.date = '';
//});
