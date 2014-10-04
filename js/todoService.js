var app = angular.module('todo');

app.service('todoService', function(){

	var items = [];

	this.getData = function(){

		return items;
	};

	this.postItem = function(newItem){

		return items.push(newItem);
	};

	this.removeItem = function(item){
		

		for(var i = 0; i < items.length; i++){
			if(items[i].text === item.text){
				items.splice(i, 1);
				return;
			};
	};

};

});