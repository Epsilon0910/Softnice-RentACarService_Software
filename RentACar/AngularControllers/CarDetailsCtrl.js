rentapp.controller('CarDetailsCtrl', function ($scope) {
    $scope.submitted = false;
    $scope.FuelList = [{ Name: 'Petrol', ID: '1' }, { Name: 'Diesel', ID: '2' }, { Name: 'Gas', ID: '3' }]
    $scope.Carclass = [{ Name: 'Sedan', ID: '1' }, { Name: 'Suv', ID: '2' }, { Name: 'Hatchback', ID: '3' }]
    $scope.LaunchYear = [{ Name: '2015', ID: '1' }, { Name: '2016', ID: '2' }, { Name: '2017', ID: '3' }]
    $scope.Transmissiontype = [{ Name: 'Automatic', ID: '1' }, { Name: 'Semi-Automatic', ID: '2' }]
    $scope.Active = [{ Name: 'Yes', ID: '1' }, { Name: 'No', ID: '2' }]
    $scope.ManufactureName = [{ Name: 'Honda', ID: '1' }, { Name: 'Toyota', ID: '2' }, { Name: 'Maruti', ID: '3' }, { Name: 'Hyundai', ID: '4' }]
    $scope.car = {
        vend: '',
        CarName: '',
        carCapacity: '',
        EngineNo: '',
        ChasisNo: '',
        Depreciationrate: '',
        CreationDate: '',
        Price: '',
        color: '',
        FuelList: '',
        Carclass: '',
        LaunchYear: '',
        Transmissiontype: '',
        Active: '',
        ManufactureName: ''

    }

    $scope.Reset = function () {
        $scope.submitted = false;
        $scope.car = [];
        vend: '';
        CarName: '';
        carCapacity: '';
        EngineNo: '';
        ChasisNo: '';
        Depreciationrate: '';
        CreationDate: '';
        Price: '';
        color: '';
        FuelList: '';
        Carclass: '';
        LaunchYear: '';
        Transmissiontype: '';
        Active: '';
        ManufactureName: ''     
    }
    
    $scope.checkboxSelection = '1';
    $scope.isCheckboxSelected = function (index) {
        return index === $scope.checkboxSelection;
    }
    $scope.checkboxSelection1 = '1';
   
    
});