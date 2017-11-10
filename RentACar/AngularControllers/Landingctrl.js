rentapp.controller('LandingCtrl', function ($scope){
    $scope.submitted = false;
    $scope.yearlist = [{ Name: '2005', ID: '1' }, { Name: '2006', ID: '2' }, { Name: '2007', ID: '3' }]
    $scope.makelist = [{ Name: 'Volkswagen', ID: '1' }, { Name: 'BMW', ID: '2' }, { Name: 'Pagani', ID: '2' }]
    $scope.Namelist = [{ Name: 'BMW Z1', ID: '1' }, { Name: 'Zonda', ID: '2' }, { Name: 'Audi R8', ID: '3' }]
    $scope.Classlist = [{ Name: 'SUV', ID: '1' }, { Name: 'SEDAN', ID: '2' }, { Name: 'MINI', ID: '3' }]
    $scope.Picklist = [{ Name: 'Driver', ID: '1' }, { Name: 'Self-driven', ID: '2' }]
    $scope.lan = {
        yearlist: '',
        makelist: '',
        Namelist: '',
        Classlist: '',
        FROM: '',
        TO: '',
        Picklist:''
    }

    $scope.Reset = function () {
        $scope.submitted = false;
        $scope.lan = [];
        yearlist: '';
        makelist: '';
        Namelist: '';
        Classlist: '';
        FROM: '';
        TO: '';
        Picklist: ''
    }
    $scope.showalertmessage = function () {
        if ($scope.lan.Classlist == undefined && $scope.lan.Namelist == undefined && $scope.lan.makelist == undefined && $scope.lan.yearlist == undefined && $scope.lan.FROM == undefined && $scope.lan.TO == undefined && $scope.lan.Picklist == undefined) {
            alert('Please Select something')
        }
        else if ($scope.lan.Classlist == "" && $scope.lan.Namelist == "" && $scope.lan.makelist == "" && $scope.lan.yearlist == "" && $scope.lan.FROM == "" && $scope.lan.TO == "" && $scope.lan.Picklist == "") {
            alert('Please Select something')
        }
    }


});

