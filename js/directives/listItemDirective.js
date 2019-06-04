angular.module("ToDoList")
.directive("list", function(){
    return {
        templateUrl: "view/list.html",
        restrict: "E",
        replace:true,
        scope:{
            items: "="
        },
        bindController: true,
        controller: function($scope, $element, $attrs){
            let listItems = $scope.items;
            this.deleteTask = function(i){
                delete listItems[i];
            }
        }     
    }
})
.directive("item", function(){
    return {
        templateUrl: "view/item.html",
        transclude:true,
        restrict: "E",
        replace:true,
        scope:{
            content: "@",
            index: "=",
            completed: "="
        },
        require: "^list",
        link: function(scope, element, attrs, ctrl){
            scope.delete = function(i){
                ctrl.deleteTask(i);
            }
        }
    }
});
