rentapp.controller('LandingCtrl', function ($scope){
    $scope.submitted = false;
    $scope.yearlist = [{ Name: '2005', ID: '1' }, { Name: '2006', ID: '2' }, { Name: '2007', ID: '3' }]   
    var makelist = [{ Name: 'Volkswagen', ID: '1' }, { Name: 'BMW', ID: '2' }, { Name: 'Pagani', ID: '2' }]
    $scope.makelist = makelist;
    $scope.Namelist = [{ Name: 'BMW Z1', ID: '1' }, { Name: 'Zonda', ID: '2' }, { Name: 'Audi R8', ID: '3' }]
    $scope.Classlist = [{ Name: 'SUV', ID: '1' }, { Name: 'SEDAN', ID: '2' }, { Name: 'HATCHBACK', ID: '3' }]
    $scope.lan = {
        yearlist:'',
        makelist:'',
        Namelist:'',
        Classlist: '',
        FROM: '',
        TO:''
    }
    $scope.Reset = function () {
        $scope.submitted = false;
        $scope.lan = [];
        yearlist:'';
        makelist:'';
        Namelist:'';
        Classlist: '';
        FROM: '';
        TO: ''
    }
    $scope.showalertmessage = function () {
        if ($scope.yea == undefined && $scope.lan.Namelist == undefined && $scope.lan.Classlist == undefined && $scope.lan.makelist == undefined && $scope.lan.FROM == undefined && $scope.lan.TO == undefined)
            alert('Please Enter something')
    }
});
