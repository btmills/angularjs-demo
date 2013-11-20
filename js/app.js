var todoapp = angular.module('todoapp', []);

todoapp.controller('TodoCtrl', function TodoCtrl($scope, $location) {

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
		$scope.remainingCount = $scope.todos.length - $scope.completedCount;
	}, true);

	$scope.location = $location;

	if ($location.path() === '') {
		$location.path('/');
	}

	$scope.$watch('location.path()', function (path) {
		$scope.statusFilter = (path === '/active') ?
			{ completed: false } : null;
	});

});
