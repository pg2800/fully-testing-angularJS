angular.module("testingAngularApp")
.controller("homeController", ["$scope", "$rootScope", function ($scope, $rootScope){
	$scope.setWho = function(_who){
		$scope.holaMundo = "Hola " + (_who||"tu..");
	}
	$scope.holaMundo = "Hola Mundo!";
}]);
