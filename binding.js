angular.module('binding',[])
    .controller('bindingController',['$scope', function($scope) {
        $scope.student = {
            name: 'Anmol',
            rollno: 101
        }
    }])