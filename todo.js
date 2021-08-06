angular.module('myTodoApp', [])
    .controller('todoController', ['$scope', function($scope) {
        
        $scope.tasks = []

        $scope.add = function() {

            if($scope.task!="") {
                task = {
                    name: $scope.task
                }
    
                $scope.tasks.push(task)
                
                $scope.task = ""
            }
        }

        $scope.remove = function(task) {
            console.log(task)
            $scope.tasks.splice($scope.tasks.indexOf(task.name),1)
        }

        
    }])
