angular.module("testingAngularApp", ["ngRoute", "ngSanitize", "mongoDBService", "Filters", "CustomDirectives"])
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
	.when("/customDirectives", {
		templateUrl: "testingAngularApp/partials/customDirectives.tpl.html"
	})
	.when("/pagination", {
		templateUrl: "testingAngularApp/partials/pagination.tpl.html"
	})
	.otherwise({
		redirectTo: "/angular"
	});
}]);