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
                scope.stars = [];
                for (var i = 0; i < scope.ratingValue; i++) {
                    scope.stars.push(i);
                }
            }
        }
    });
