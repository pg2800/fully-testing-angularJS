angular.module("testingAngularApp")
.controller("randomFilterController", ["$scope", "randomFilter", function ($scope, randomFilter){
	$scope.items = [], i = 15; 
	while(i--) $scope.items.push({n:i});

	$scope.items = randomFilter($scope.items);

	$scope.add = function (v){
		if(isNaN(v)) return;
		$scope.items.unshift({n:v});
	};
}]);