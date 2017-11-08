rentapp.controller('EmployeeDetailsCtrl', function ($scope) {
    $scope.submitted = false;
    $scope.Departmentlist = [{ Name: 'Operations', ID: '1' }, { Name: 'Management', ID: '2' }, { Name: 'Finance', ID: '3' }, { Name: 'Marketing', ID: '4' }, { Name: 'Sales', ID: '5' }, { Name: 'Information Technology', ID: '6' }, { Name: 'Customer Support', ID: '7' }]
    $scope.Designation = [{ Name: 'Petrol', ID: '1' }, { Name: 'Diesel', ID: '2' }, { Name: 'Gas', ID: '3' }]
    $scope.Bankname = [{ Name: 'SBI', ID: '1' }, { Name: 'ICICI', ID: '2' }, { Name: 'BOI', ID: '3' }, { Name: 'HDFC', ID: '4' }]
    $scope.Active = [{ Name: 'Active', ID: '1' }, { Name: 'Inactive', ID: '2' }]
    $scope.empDetail = {
    bankbranch:'',
    Email1: '',
    Names: '',
    Accno: '',
    BCode: '',
    Pno: '',
    IFSC: '',
    Add1: '',
    Add2: '',
    Aadhar: '',
    Createddate: '',
    Departmentlist:'',
    Designation:'',
    Bankname:'',
    Active: '',
        SSN:''
}    

    $scope.Reset = function () {
        $scope.submitted = false;
        $scope.empDetail = [];
        bankbranch:'',
        Email1; '',
        Names; '',
        Accno; '',
        BCode; '',
        Pno; '',
        IFSC; '',
        Add1; '',
        Add2; '',
        Aadhar; '',
        Createddate; '',
        Departmentlist;'',
        Designation;'',
        Bankname;'',
        Active; '',
        SSN;''
    }
});