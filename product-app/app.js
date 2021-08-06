angular.module('productSpa')
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when("/", {
            tempalteUrl: 'views/home.html'
        })

            .when("/home", {
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })

            .when("/product", {
                templateUrl: 'views/product.html',
                controller: 'productController'
            })
            .when("/productdetails/:productId", {
                templateUrl: 'views/productdetail.html',
                controller: 'productdetailController'
            })

    }])
