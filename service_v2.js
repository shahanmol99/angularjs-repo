var registrationapp = angular.module('registrationModule', [])

registrationapp.controller('controller1', ['$scope', '$http', function ($scope, $http) {

    $scope.vm = {}

    $scope.display = function () {

        $scope.myStyle = { 'visibility': 'hidden' }

        if ($scope.myStyle.visibility == "hidden") {
            $scope.myStyle.visibility = 'visible'
        }
        // console.log($scope.myStyle.visibility)
        var request = {
            method: 'GET',
            url: "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/"
        }

        $http(request)
            .then(function (result) {
                // $scope.vm.output = result.data
                $scope.vm.studentArr = removeNullValues(result.data)
                // console.log($scope.vm.studentArr)
            })
            .catch(function (reject) {
                // $scope.vm.output = reject.data
                console.log(reject)
            })
        // console.log(url);
    }

    function removeNullValues(studentArr) {
        for (var i = 0; i < studentArr.length; i++) {
            if (studentArr[i].rollNo == 0) {
                studentArr.splice(i, 1);
            }
        }
        return studentArr;
    }


    $scope.submit = function () {
        $scope.vm.formData = $scope.myForm
        console.log($scope.vm.student)

        var request = {
            method: 'POST',
            url: "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify($scope.vm.student)
        }

        $http(request)
            .then(function (result) {
                $scope.vm.student.id = result.data
            })
    }

    $scope.updateField = function (student) {
        $scope.vm.student = {};
        // console.log(new Date(student.date))

        $scope.vm.student.id = student.id
        $scope.vm.student.name = student.name
        $scope.vm.student.age = student.age
        $scope.vm.student.rollNo = student.rollNo
        $scope.vm.student.isMale = student.isMale.toString()
        $scope.vm.student.email = student.email
        $scope.vm.student.date = new Date(student.date)

    }

    $scope.update = function () {
        $scope.vm.formData = $scope.myForm
        console.log($scope.vm.student)

        var request = {
            method: 'PUT',
            url: "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/" + $scope.vm.student.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify($scope.vm.student)
        }

        $http(request)
            .then(function (result) {
                console.log(result.data);
            })

    }

    $scope.delete = function () {
        var request = {
            method: 'delete',
            url: "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/" + $scope.vm.student.id,
        }

        $http(request)
            .then(function (result) {
                console.log(result.data);
            })

    }

    $scope.reset = function () {
        $scope.vm.student = {};
    }
}])

registrationapp.filter("gender", function () {
    return function (gender) {
        switch (gender) {
            case true:
                return "Male";
            case false:
                return "Female";
        }
    }
})
