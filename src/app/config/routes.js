angular.module("testingAngular", ["ngRoute"])
.config(["$routeProvider", function ($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "app/partials/home.html",
		controller: "homeController"
	})
	.otherwise({
		templateUrl: "app/partials/home.html",
		controller: "homeController"
	});
}]);