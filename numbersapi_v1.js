var numberapp = angular.module('numberMod', [])

numberapp.controller('factController', ['$scope', '$http', function($scope, $http) {

    $scope.findFacts = function() {
        if($scope.vm.input!="") {
            url = "http://numbersapi.com/"+$scope.vm.input

            $http.get(url) 
                .then(function(result) {
                    $scope.vm.output = result.data
                })
                .catch(function(error) {
                    $scope.vm.output = error
                })
            console.log(url);    
        }
    }
}])