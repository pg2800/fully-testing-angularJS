angular.module("testingAngularApp")
.controller("mongoController", ["$scope", "User", function ($scope, User){
	$scope.testing = "Hola Mundo!";
	$scope.users = [];
	var id;
	User.query({}, function (users){
		$scope.users = users;
		var last = $scope.users[$scope.users.length-1];
		id = (last && last.id + 1) || 0;
	});

	$scope.c = function (){
		var myTestUser = new User({
			id: id++,
			name:"holamundo"
		});
		myTestUser.$save(function (u){
			$scope.users.push(u);
		});
	}

	$scope.deleteAll = function(){
		angular.forEach($scope.users, function (user){
			user.$delete();
		});
		$scope.users = [];
	}


}]);