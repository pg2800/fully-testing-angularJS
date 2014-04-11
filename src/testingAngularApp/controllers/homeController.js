angular.module("testingAngularApp")
.controller("homeController", ["$scope", function ($scope){
	$scope.setWho = function(_who){
		$scope.holaMundo = "Hola " + (_who||"tu..");
	}
	$scope.holaMundo = "Hola Mundo!";

}]);
// .config(["$rootScope", function ($rootScope){
// 	$rootScope.navbar = {
// 		links: {
// 			angular: "active",
// 			mongo: ""
// 		}
// 	};
// }]);
