var app = angular.module('todo');

app.controller('mainCtrl', function($scope, todoService){

	$scope.getData = function(){
		$scope.items = todoService.getData();
	};

	$scope.postItem = function(){
		var newItem = {};
		newItem.text = $scope.newText;
		todoService.postItem(newItem);
		$scope.newText = '';

	};

	$scope.removeItem = function(item){
		todoService.removeItem(item);
	};

	$scope.getData();

});