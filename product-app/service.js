angular.module('productSpa')
    .factory('dataService', ['$q', '$http',function ($q, $http) {
        var service = {}

        service.getProducts = function() {
            return $q(function (resolve, reject) {
                $http.get("products.json") 
                    .then(function(response) {
                        resolve(response)
                    })
                    .catch(function(err) {
                        reject(err)
                    })
            })
        }

        return service
    }])
