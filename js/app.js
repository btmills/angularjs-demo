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

	$scope.removeTodo = function (todo) {
		$scope.todos.splice($scope.todos.indexOf(todo), 1);
	};

	$scope.clearCompleted = function () {
		$scope.todos = $scope.todos.filter(function (todo) {
			return !todo.completed;
		});
	};

	$scope.$watch('todos', function () {
		$scope.completedCount = $scope.todos.filter(function (todo) {
			return todo.completed;
		}).length;
	}, true);

});
