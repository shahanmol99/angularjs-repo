angular.module('studentSpa')
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when("/", {
            tempalteUrl: 'index.html'
        })

            .when("/home", {
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })

            .when("/resgiter", {
                templateUrl: 'views/register.html',
                controller: 'registerController'
            })
            .when("/edit/:studentId", {
                templateUrl: 'views/edit.html',
                controller: 'editController'
            })

    }])
