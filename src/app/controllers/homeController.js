angular.module("testingAngular")
.controller("homeController", ["$scope", "who", function ($scope, who){
	$scope.holaMundo = "Hola "+who;
}]);