angular.module("testingAngularApp")
.controller("randomFilterController", ["$scope", "randomFilter", function ($scope, randomFilterFilter){
	var items = [], i = 150; while(i--) items.push(i);

	$scope.items = randomFilterFilter(items);

	$scope.add = function (v){
		if(isNaN(v)) return;
		$scope.items.push(v);
	};
}]);