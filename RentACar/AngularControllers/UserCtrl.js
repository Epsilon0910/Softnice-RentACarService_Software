rentapp.controller('UserCtrl', function ($scope){
    $scope.submitted = false;
    $scope.Department = [{ Name: 'Operations', ID: '1' }, { Name: 'Management', ID: '2' }, { Name: 'Finance', ID: '3' }, { Name: 'Marketing', ID: '4' }, { Name: 'Sales', ID: '5' }, { Name: 'Information Technology', ID: '6' }, { Name: 'Customer Support', ID: '7' }]
    $scope.Role = [{ Name: 'Manager', ID: '1' }, { Name: 'Help Desk', ID: '2' }, { Name: 'Admin', ID: '2' }]
    $scope.Language = [{ Name: 'English', ID: '1' }, { Name: 'Hindi', ID: '2' }, { Name: 'French', ID: '3' }, { Name: 'Urdu', ID: '4' }]
    $scope.user = {
        Department: '',
        Role:'',
        Language:'',
        Name:'',
        Currentpass:'',
        Newpass:'',
        Confirmpass:''
    }
});