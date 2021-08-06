var mod = angular.module('modA', [])
mod.controller('primeController', ['$scope', 'MathService', function ($scope, MathService) {
    $scope.vm = {}

    $scope.prime = function () {
        if ($scope.vm.input != "") {
            MathService.checkPrime($scope.vm.input)
                .then(function (result) {
                    if (result) {
                        $scope.vm.output = "Number is prime"
                        return;
                    }
                    $scope.vm.output = "Number is not prime"
                })
        }

        console.log("End")
    }


}])

mod.controller('evenController', ['$scope', 'MathService', function ($scope, MathService) {

    $scope.vm = {}

    $scope.even = function () {
        if ($scope.vm.input != "") {
            MathService.checkEven($scope.vm.input)
                .then(function (result) {
                    if (result) {
                        $scope.vm.output = "Number is even"
                        return;
                    }
                    $scope.vm.output = "Number is odd"
                })
        }

        console.log("End")
    }

}])


mod.factory('MathService', ['$q', function ($q) {
    var factory = {};

    factory.checkEven = function (no) {
        return $q(function (resolve, reject) {
            if (no % 2 == 0) {
                resolve(true)
                return
            }
            resolve(false);
        })
    }

    factory.checkPrime = function(no) {
        var limit = no/2
        return $q(function (resolve, reject) {
            for(var i=2;i<(limit);i++) {
                if (no%i==0) {
                    resolve(false)
                    return
                }
            }
            resolve(true);
        })
    }
    return factory;
}])
