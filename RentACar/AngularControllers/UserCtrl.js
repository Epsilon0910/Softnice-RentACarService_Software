rentapp.controller('UserCtrl', function ($scope){
    $scope.submitted = false;
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