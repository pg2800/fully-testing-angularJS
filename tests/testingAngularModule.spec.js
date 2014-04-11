(function(){

	describe("initial angular mock objects test", function (){
		it("should find the mock variable 'module' of the global scope", function (){
			expect(window.module).not.toBe(undefined);
		});
	});

	describe("testing modules", function (){
		beforeEach(module("testingAngularApp"));
		var $rootScope;
		beforeEach(inject(function (_$rootScope_){
			$rootScope = _$rootScope_;
		}));

		it("should find the testingAngularApp module", function (){
			expect($rootScope).not.toBe(undefined);
		});

		it("should inject the rootScope", function (){
			expect($rootScope.$id).toBe("002");
		});
	});

	describe("testing routes' definitions", function (){
		beforeEach(module("testingAngularApp"));

		it('should map routes to controllers', inject(function($route) {
			expect($route.routes['/angular'].controller).toBe('homeController');
			expect($route.routes['/angular'].templateUrl).toBe('testingAngularApp/partials/home.html');
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

		it('should be able to access the scope of the homeController', inject(function ($rootScope, $controller){
			var $scope = $rootScope.$new();
			$controller("homeController", {
				$scope: $scope
			});
			expect($scope.holaMundo).not.toBe(undefined);
			expect($scope.setWho).not.toBe(undefined);
			expect($scope.holaMundo).toBe("Hola Mundo!");

			$scope.setWho();
			expect($scope.holaMundo).toBe("Hola tu..");

			$scope.setWho("Pablo..!");
			expect($scope.holaMundo).toBe("Hola Pablo..!");

		}));
	});

})();