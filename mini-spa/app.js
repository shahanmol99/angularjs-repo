angular.module('spa', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider.when("/", {
            tempalteUrl : 'index.html'
        })

        .when("/home", {
            templateUrl : 'fragments/home.html',
            tempalte : "Hello"
        })

        .when("/about",{
            templateUrl : 'fragments/about.html'

        })

        .when("/career",{
            templateUrl : 'fragments/career.html'
        })

    }])