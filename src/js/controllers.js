'use strict';

angular.module('myApp.controllers', ['myApp.filters'])
    .controller('NgAnimateCtrl', ['$scope', function ($scope) {
        $scope.items = [
            { text: "Study Angular", completed: false },
            { text: "Get Job", completed: false }
        ];

        $scope.inputText = "";

        $scope.addItem = function () {
            var arrTodos = $scope.inputText.split('');

            for (var i = 0; i < arrTodos.length; i++){
                $scope.items.push({
                    text: $scope.inputText,
                    completed: false
                });
            }
                $scope.inputText = "";
        };
}])
    .animation('.item', function(){
        return {
            enter: function(element, done){
                element.css({'opacity': 1, 'margin-left': 0}, 500, done);
            },
            leave: function(element, className, done){
                element.animate({'opacity': 0, 'margin-left': -230}, 500, done);
            }
        }
    });
