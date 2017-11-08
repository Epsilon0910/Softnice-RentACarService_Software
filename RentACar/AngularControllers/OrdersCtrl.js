rentapp.controller('OrdersCtrl', function ($scope) {
    $scope.submitted = false;
    $scope.ClassList = [{ Name: 'Hatchback', ID: '1' }, { Name: 'SUV', ID: '2' }, { Name: 'SEDAN', ID: '3' }, { Name: 'MINI', ID: '4' }]

    $scope.FuelList = [{ Name: 'Petrol', ID: '1' }, { Name: 'Diesel', ID: '2' }, { Name: 'Gas', ID: '3' }] 
    $scope.DurationList = [{ Name: 'Day', ID:'1'}, {Name: 'Weekly', ID: '2' }, { Name: 'Monthly', ID: '3' }, { Name: 'Yearly', ID: '4' }]
    $scope.PickupList = [{ Name: 'Within a city', ID: '1' }, { Name: 'Outside', ID: '2' }]
    $scope.TypeList=['AC', 'Non-AC']

    $scope.add = function () {
        console.log("submitting");
    };
    $scope.changeOption = function () {
        
    };
 
});


