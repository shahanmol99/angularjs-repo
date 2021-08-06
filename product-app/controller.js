angular.module('productSpa', ['ngRoute'])
    .controller('homeController', ['$scope', '$http', '$window', function ($scope, $http, $window) {

    }])

    .controller('productController', ['$scope', 'dataService', '$window', function ($scope, dataService, $window) {

        dataService.getProducts()
            .then(function (result) {
                $scope.products = result.data
            })

        $scope.buttonName = "Show Images"
        $scope.myStyle = {
            "visibility": "hidden"
        }

        $scope.setButton = function () {
            if ($scope.buttonName == "Show Images") {
                $scope.buttonName = "Hide Images"
                $scope.myStyle = {
                    "visibility": "visible"
                }
                return
            }
            $scope.buttonName = "Show Images"
            $scope.myStyle = {
                "visibility": "hidden"
            }

        }
    }])

    .controller('productdetailController', ['$scope', 'dataService', '$window', '$routeParams', function ($scope, dataService, $window, $routeParams) {
        dataService.getProducts()
            .then(function (result) {
                var productIndex = -1;
                for (var i = 0; i < result.data.length; i++) {
                    if (result.data[i].productCode == $routeParams.productId) {
                        productIndex = i;
                    }
                }
                $scope.product = result.data[productIndex]

                $scope.setStar = function (star) {
                    return { "width": star * 10 }
                }
            })

    }])

    .filter("price", function () {
        return function (price) {
            return "$ " + price
        }
    })
