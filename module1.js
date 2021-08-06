angular.module('modA', [])
    .controller('controllerA', ['$rootScope','$scope','$log','$timeout',function($rootScope,$scope,$log,$timeout){
    console.log("Inside Controler A")
    $log.info("using log service")

    $rootScope.company = {
        name: 'Aurionpro',
        strength: 500
    }

    $scope.developer = {
        name: 'Anmol',
        role: 'Jr Developer'
    }

    $timeout(function() {
        $scope.developer = {
            name: 'Abcd',
            role: 'Jr Developer'
        }
    },2000)

    $log.info($rootScope)
    $log.info($scope)
}])