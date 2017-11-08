rentapp.controller('VendorCtrl', function ($scope) {
    $scope.submitted = false;
    $scope.CountryList = [{ Name: 'India', ID: '1' }, { Name: 'KSA', ID: '2' }]
    $scope.CountrycodeList = [{ Name: '+1', ID: 'United States' }, { Name: '+972', ID: 'Italy' }]
    $scope.StateList = [{ Name: 'MP', ID: '1' }, { Name: 'AP', ID: '2' }]
    $scope.StatusList = [{ Name: 'Acitve', ID: '1' }, { Name: 'Inactive', ID: '2' }]
    $scope.VendorDetail = {
        SupplierName: '',
        ContactPerson: '',
        SupplierEmail: '',
        CountrycodeList:'',
        PhoneNumber: '',
        VendorCode: '',
        AlternateNumber: '',
        CountryList: '',
        AddressLine1: '',
        StateList: '',
        AddressLine2: '',
        ZIPCode: '',
        DateAdded: '',
        Status: ''
    }

    $scope.Reset = function () {
        $scope.submitted = false;
        $scope.VendorDetail = [];
        SupplierName: '',
        ContactPerson; '',
        SupplierEmail; '',
        PhoneNumber; '',
        VendorCode; '',
        AlternateNumber; '',
        CountryList; '',
        AddressLine1; '',
        StateList; '',
        AddressLine2; '',
        ZIPCode; '',
        DateAdded; '',
            Status; '',
                abc;''
    }
});