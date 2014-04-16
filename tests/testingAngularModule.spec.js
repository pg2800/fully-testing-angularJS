(function(){

	describe("initial angular mock objects test", function (){
		it("should find the mock variable 'module' of the global scope", function (){
			expect(window.module).toBeDefined();
		});
	});

	describe("testingAngularApp module", function (){
		beforeEach(module("testingAngularApp"));
		var $rootScope;
		beforeEach(inject(function (_$rootScope_){
			$rootScope = _$rootScope_;
		}));

		it("should find the testingAngularApp module", function (){
			expect($rootScope).toBeDefined();
		});

		it("should inject the rootScope", function (){
			expect($rootScope.$id).toBe("002");
		});

		// it("should find that users is an array", inject(function ($controller){
		// 	var $scope = $rootScope.$new();
		// 	$controller('mongoController', {
		// 		$scope: $scope,
		// 		User: {}
		// 	});
		// 	expect($scope.users).toBe([]);
		// }));
	});

	describe("testing mongoDB module", function() {
		beforeEach(module("mongoDBService"));
		var User, users; 
		beforeEach(inject(function (_User_) {
			User = _User_;
		}));

		it("should");
	});

	describe("testing routes' definitions", function (){
		beforeEach(module("testingAngularApp"));

		it('should map routes to controllers', inject(function ($route) {
			// Defined
			expect($route.routes['/angular']).toBeDefined();
			expect($route.routes['/mongo']).toBeDefined();
			expect($route.routes['/filter']).toBeDefined();
			// Controllers as expected.
			expect($route.routes['/angular'].controller).toEqual('homeController');
			expect($route.routes['/mongo'].controller).toEqual('mongoController');
			expect($route.routes['/filter'].controller).toEqual('randomFilterController');
			// Templates/Partials as expected.
			expect($route.routes['/angular'].templateUrl).toEqual('testingAngularApp/partials/home.html');
			expect($route.routes['/mongo'].templateUrl).toEqual('testingAngularApp/partials/mongo.html');
			expect($route.routes['/filter'].templateUrl).toEqual('testingAngularApp/partials/filter.html');
    	// otherwise redirect to
    	expect($route.routes[null].redirectTo).toBe('/angular');
    }));
		
	});

	describe("Using controllers", function (){
		var $rootScope;
		beforeEach(module('testingAngularApp'));
		beforeEach(inject(function (_$rootScope_){
			$rootScope = _$rootScope_;
		}));

		it('should be able to access the scope of the homeController', inject(function ($controller){
			var $scope = $rootScope.$new();
			$controller("homeController", {
				$scope: $scope
			});
			expect($scope.holaMundo).toBeDefined();
			expect($scope.setWho).toBeDefined();
			expect($scope.holaMundo).toBe("Hola Mundo!");

			$scope.setWho();
			expect($scope.holaMundo).toBe("Hola tu..");

			$scope.setWho("Pablo..!");
			expect($scope.holaMundo).toBe("Hola Pablo..!");
		}));
	});


})();