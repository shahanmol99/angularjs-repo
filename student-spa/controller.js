angular.module('studentSpa', ['ngRoute'])
    .controller('homeController', ['$scope', '$http', '$window', function ($scope, $http, $window) {

        $scope.vm = {}
        var request = {
            method: 'GET',
            url: 'http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students',
        }

        $http(request)
            .then(function (result) {
                // $scope.vm.output = result.data
                $scope.vm.studentArr = removeNullValues(result.data)
                $scope.vm.count = $scope.vm.studentArr.length
                console.log($scope.vm.studentArr)
            })
            .catch(function (reject) {
                // $scope.vm.output = reject.data
                console.log(reject)
            })

        function removeNullValues(studentArr) {
            for (var i = 0; i < studentArr.length; i++) {
                if (studentArr[i].rollNo == 0) {
                    studentArr.splice(i, 1);
                }
            }
            return studentArr;
        }

        $scope.delete = function (id) {
            console.log(id)

            var request = {
                method: 'delete',
                url: "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/" + id,
            }

            $http(request)
                .then(function (result) {
                    console.log(result.data);
                    $window.location.href = "/student-spa/index.html#/home"
                })
        }

    }])

    .controller('registerController', ['$scope', '$http', '$window', function ($scope, $http, $window) {

        console.log("Hello")
        $scope.submit = function () {
            console.log($scope.vm.student)

            var request = {
                method: 'POST',
                url: "https://cors-anywhere.herokuapp.com/gsmktg.azurewebsites.net/api/v1/techlabs/test/students",
                headers: {
                    // 'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                data: $scope.vm.student
            }

            $http(request)
                .then(function (result) {
                    console.log(result.data)
                    $window.location.href = "/student-spa/index.html#/home"
                })
        }
    }])

    .controller('editController', ['$scope', '$http', '$window', '$routeParams', function ($scope, $http, $window, $routeParams) {
        console.log($routeParams.studentId)
        $scope.vm = {}
        $scope.vm.student = {}

        $scope.vm.student.id = $routeParams.studentId

        var request = {
            method: 'GET',
            url: 'http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/' + $routeParams.studentId,
        }

        $http(request)
            .then(function (result) {
                console.log(result.data);
                $scope.vm.student.name = result.data[0].name
                $scope.vm.student.age = result.data[0].age
                $scope.vm.student.rollNo = result.data[0].rollNo
                $scope.vm.student.isMale = result.data[0].isMale.toString()
                $scope.vm.student.email = result.data[0].email
                $scope.vm.student.date = new Date(result.data[0].date)
            })
            .catch(function (reject) {
                console.log(reject)
            })


        $scope.update = function () {
            var request = {
                method: 'PUT',
                // url: "https://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/" + $routeParams.studentId,
                url: "https://cors-anywhere.herokuapp.com/gsmktg.azurewebsites.net/api/v1/techlabs/test/students/" + $routeParams.studentId,

                headers: {
                    'Access-Control-Allow-Headers': 'Accept',
                    // 'Access-Control-Allow-Headers': 'true',                    
                    'Content-Type': 'application/json'
                },
                data: $scope.vm.student
            }

            $http(request)
                .then(function (result) {
                    console.log(result.data)
                    $window.location.href = "/student-spa/index.html#/home"
                })
        }
    }])

    .filter("gender", function () {
        return function (gender) {
            switch (gender) {
                case true:
                    return "Male";
                case false:
                    return "Female";
            }
        }
    })
