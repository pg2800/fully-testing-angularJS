angular.module("testingAngularApp", ["ngRoute", "mongoDBService", "Filters"])
.config(["$routeProvider", function ($routeProvider){
	$routeProvider
	.when("/angular", {
		templateUrl: "testingAngularApp/partials/home.html",
		controller: "homeController"
	})
	.when("/mongo", {
		templateUrl: "testingAngularApp/partials/mongo.html",
		controller: "mongoController"
	})
	.when("/filter", {
		templateUrl: "testingAngularApp/partials/filter.html",
		controller: "randomFilterController"
	})
	.otherwise({
		redirectTo: "/angular"
	});
}]);
