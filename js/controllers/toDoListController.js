angular.module("toDoList").controller("toDoListController", function($scope){
    $scope.app = "My ToDo List";
    $scope.taskItems = [
        { description: "Culpa consequat eiusmod qui sit in consectetur laboris.", completed: true},
        { description: "Amet non mollit qui ex exercitation."},
        { description: "Ipsum irure adipisicing quis est culpa veniam officia."},
    ];
    $scope.addTask = function(item){
        $scope.taskItems.push(angular.copy(item));
        delete $scope.item;
    };
});