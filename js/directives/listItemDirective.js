angular.module("toDoList")
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
            this.deleteTask = function(i){
                delete $scope.items[i];
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
                console.log(element);
            }
        }
    }
});
