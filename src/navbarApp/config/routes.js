angular.module("navbarApp", ["ngRoute"])
.config(["$routeProvider", function ($routeProvider){
	$routeProvider
	.when("/angular", {
		templateUrl: "navbarApp/partials/navbar.html",
		controller: "navbarController"
	})
	.when("/mongo", {
		templateUrl: "navbarApp/partials/navbar.html",
		controller: ""
	})
	.otherwise({
		redirectTo: "/angular"
	})
}]);