describe("Custom Directives", function() {

	it("should find the module", function() {
		var $injector = angular.injector(['CustomDirectives']);		
		expect($injector).toBeDefined();
	});
	beforeEach(module("CustomDirectives"));

	describe("Pagination", function() {
		var $scope, $compile, $rootScope;
		
		beforeEach(inject(function (_$compile_, _$rootScope_){
			$rootScope = _$rootScope_;
			$compile = _$compile_;
			$scope = $rootScope.$new();
		}));

		it("should find the pagination directive", inject(function(_cdPaginationDirective_) {
			expect(_cdPaginationDirective_).not.toBeUndefined();
		}));

		it("should compile", function() {
			expect($compile).toBeDefined();
			var element = $compile("<cd:pagination></cd:pagination>")($scope);
			expect(element).toBeDefined();
		});

	});

	describe("Button", function() {
		var $scope, $compile, $rootScope;

		beforeEach(inject(function (_$compile_, _$rootScope_){
			$rootScope = _$rootScope_;
			$compile = _$compile_;
			$scope = $rootScope.$new();
		}));

		it("should compile", function() {
			var element = $compile("<button></button>")($scope);
			expect(element).toBeDefined();
		});

		it("must add btn class", function() {
			var element = $compile("<button></button>")($scope);
			expect(element.hasClass("btn")).toBe(true);
		});

		it("must add btn-[type] class", function() {
			var element = $compile('<button data-role="primary"></button>')($scope);
			expect(element.hasClass("btn-primary")).toBe(true);
		});

		it("must add btn-[size] class", function() {
			var largeButton = $compile('<button data-size="lg"></button>')($scope),
			smallButton = $compile('<button data-size="sm"></button>')($rootScope.$new());

			expect(largeButton.hasClass("btn-lg")).toBe(true);
			expect(smallButton.hasClass("btn-sm")).toBe(true);
		});
	});

	//
	describe("Code", function() {
		var $compile, $scope, $rootScope;

		beforeEach(inject(function (_$compile_, _$rootScope_){
			$compile = _$compile_;
			$rootScope = _$rootScope_;
			$scope = $rootScope.$new();
		}));

		it("should find the directive", inject(function(_cdCodeDirective_) {
			expect(_cdCodeDirective_).toBeDefined();
		}));

		it("should compile", function() {
			expect($compile('<div data-cd:code="testDiv:inScope"></div>')).not.toBeFalsy();
			expect($compile('<div data-cd-code="testDiv:inParent"></div>')).not.toBeFalsy();
			expect($compile('<div data:cd:code="testDiv:inActual"></div>')).not.toBeFalsy();

			expect($compile('<div data-cd:code="testDiv:inScope"></div>')($rootScope.$new())[0].nodeName).toBe("DIV");
			expect($compile('<div data-cd-code="testDiv:inParent"></div>')($rootScope.$new())[0].nodeName).toBe("DIV");
			expect($compile('<div data:cd:code="testDiv:inActual"></div>')($rootScope.$new())[0].nodeName).toBe("DIV");
		});

		describe("Scopes hierarchy", function() {
			var actualAncestor, parentScope, thisScope;

			beforeEach(inject(function (){
				actualAncestor = $scope.$new();
				parentScope = actualAncestor.$new();
				thisScope = parentScope.$new();
			}));

			it("should declare the variable in the CURRENT scope", function() {
				$rootScope.testDiv = actualAncestor.testDiv = null;
				$compile('<div data-cd:code="testDiv:inScope"></div>')(thisScope);

				expect(thisScope.hasOwnProperty("testDiv")).toBeTruthy();
				expect(parentScope.hasOwnProperty("testDiv")).toBeFalsy();
				expect(actualAncestor.testDiv).toBeNull();
				expect($rootScope.testDiv).toBeNull();
			});

			it("should declare the variable in the PARENT scope", function() {
				$rootScope.testDiv = actualAncestor.testDiv = null;
				$compile('<div data-cd:code="testDiv:inParent"></div>')(thisScope);

				expect(thisScope.hasOwnProperty("testDiv")).toBeFalsy();
				expect(parentScope.hasOwnProperty("testDiv")).toBeTruthy();
				expect(actualAncestor.testDiv).toBeNull();
				expect($rootScope.testDiv).toBeNull();
			});

			it("should declare the variable in the ANCESTOR scope", function() {
				$rootScope.testDiv = actualAncestor.testDiv = null;
				$compile('<div data-cd:code="testDiv:inActual"></div>')(thisScope);

				expect(thisScope.hasOwnProperty("testDiv")).toBeFalsy();
				expect(parentScope.hasOwnProperty("testDiv")).toBeFalsy();
				expect(actualAncestor.testDiv).not.toBeNull();
				expect($rootScope.testDiv).toBeNull();
			});

			it("should declare the variable in the OUTERMOST scope", function() {
				$compile('<div data-cd:code="testDiv:inActual"></div>')(thisScope);

				expect(thisScope.hasOwnProperty("testDiv")).toBeFalsy();
				expect(parentScope.hasOwnProperty("testDiv")).toBeFalsy();
				expect(actualAncestor.hasOwnProperty("testDiv")).toBeFalsy();
				expect($rootScope.testDiv).not.toBeNull();
			});
		});

});

});


