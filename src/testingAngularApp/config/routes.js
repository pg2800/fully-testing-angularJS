angular.module("testingAngularApp", ["ngRoute"])
.config(["$routeProvider", function ($routeProvider){
	$routeProvider
	.when("/angular", {
		templateUrl: "testingAngularApp/partials/home.html",
		controller: "homeController"
	})
	.when("/mongo", {
		templateUrl: "",
		controller: ""
	})
	.otherwise({
		redirectTo: "/angular"
	});
}]);
