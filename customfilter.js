angular.module("myModule", [])
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
    .controller("myController", function ($scope) {

        var employees = [
            { name: "Ben", gender: true, salary: 55000 },
            { name: "Sara", gender: false, salary: 68000 },
            { name: "Mark", gender: true, salary: 57000 },
            { name: "Pam", gender: false, salary: 53000 },
            { name: "Todd", gender: true, salary: 60000 }
        ];

        $scope.employees = employees;
    });
