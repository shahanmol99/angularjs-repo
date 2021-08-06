angular.module('listnerapp', [])
    .controller('listnerController', ['$scope', function($scope) {
        $scope.listner = function() {
            alert("God is listening")

            alert("Devil is listening")
        }
    }])