angular.module('modB', [])
    .controller('controllerB', ['$rootScope','$scope',function($rootScope,$scope){

    $scope.message = "Hello Says Controller B"


        console.log($rootScope.developer)


}])



angular.module('modA', ['modB'])
    .controller('controllerA', ['$rootScope','$scope',function($rootScope,$scope){

    $scope.message = "Hello Says Controller A"


    $rootScope.developer = {
        name: 'Anmol',
        role: 'Jr Developer',
        department: 20,
        address: ['abc','pqr']
    }

}])