(function(){

	describe("initial angular mock objects test", function (){
		it("should find the mock variable 'module' of the global scope", function (){
			expect(window.module).not.toBe(undefined);
		});
	});

	describe("testing modules", function (){
		beforeEach(module("testingAngular"));
		var $rootScope;
		beforeEach(inject(function (_$rootScope_){
			$rootScope = _$rootScope_;
		}));

		it("should find the testingAngular module", function (){
			expect($rootScope).not.toBe(undefined);
		});

		it("should inject the rootScope", function (){
			expect($rootScope.$id).toBe("002"); // WHY?
		});
	});

	describe("testing routes' definition", function (){
		beforeEach(module("testingAngular"));

		it('should map routes to controllers', inject(function($route) {
			expect($route.routes['/'].controller).toBe('homeController');
			expect($route.routes['/'].templateUrl).toEqual('app/partials/home.html');
    	// otherwise redirect to
    	expect($route.routes[null].redirectTo).toEqual('/');
    }));
		
	});

	describe("Using controllers", function (){
		var $rootScope;
		beforeEach(module('testingAngular'));
		beforeEach(inject(function (_$rootScope_){
			$rootScope = _$rootScope_;
		}));

		it('should be able to access the scope of the homeController', inject(function ($rootScope, $controller){
			var $scope = $rootScope.$new();
			$controller("homeController", {
				$scope: $scope,
				who: "Mundo!"
			});
			expect($scope.holaMundo).not.toBe(undefined);
			expect($scope.holaMundo).toBe("Hola Mundo!");
		}));
	});

})();