var todoapp = angular.module('todoapp', []);

todoapp.controller('TodoCtrl', function TodoCtrl($scope) {

	$scope.todos = [];
	$scope.newTodo = '';

	$scope.addTodo = function () {
		$scope.todos.push({
			title: $scope.newTodo,
			completed: false
		});

		$scope.newTodo = '';
	};

});
