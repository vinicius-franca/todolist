angular.module("toDoList").controller("toDoListController", function($scope){
    $scope.app = "My ToDo List";
    $scope.taskItems = [
        { description: "Culpa consequat eiusmod qui sit in consectetur laboris."},
        { description: "Amet non mollit qui ex exercitation."},
        { description: "Ipsum irure adipisicing quis est culpa veniam officia."},
    ];
    $scope.addTask = function(item){
        $scope.taskItems.push(angular.copy(item));
        delete $scope.item;
    };
    $scope.deleteTask = function(taskItems){
        $scope.taskItems = taskItems.filter(function(item){
            if(!item.selecionado) return item;
        });
    }
    $scope.isTaskSelected = function(taskItems){
        return taskItems.some(function(item){
            return item.selecionado;
        });
    }
});