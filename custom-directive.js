// angular.module('starApp', [])
//     .controller('StarCtrl', ['$scope', function ($scope) {
//     $scope.ratings = {
//         current: 3,
//     } 
// }])

angular.module('productSpa')
    .directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
        },
        link: function (scope, elem, attrs) {
            console.log(scope)
            scope.stars = [];
            for (var i = 0; i < scope.ratingValue; i++) {
                scope.stars.push(i);
            }
        }
    }
});