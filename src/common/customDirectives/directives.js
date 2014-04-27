// cd === CustomDirectives
angular.module('CustomDirectives', ["ngRoute"])
.directive('cdPagination', [function () {
	return {
		restrict: 'A',
		scope: true,
		controller: function($scope, $element, $attrs, $transclude) {

		},
		compile: function compile(tElement, tAttrs, transclude) {
			return function postLink(scope, iElement, iAttrs, controller) {

			}
		},
		link: function postLink(scope, iElement, iAttrs) {

		}
	};
}])
.directive('button', [function () {
	return {
		restrict: 'E',
		scope: false,
		compile: function compile(tElement, tAttrs, transclude) {
			tElement.addClass("btn");
			tAttrs.size && tElement.addClass("btn-"+tAttrs.size);
			tAttrs.role && tElement.addClass("btn-"+tAttrs.role);
		}
	};
}])
// Gets the element code
// 
.directive('cdCode', [function () {
	var cdCodeRegExp = /(?:(?:data|x)[-:_])?cd[-:_]code\s*?=\s*?".*?"/i;
	return {
		restrict: 'A'
		,scope: false
		,link: function ($scope, iElement, iAttrs) {
			if(!iAttrs.cdCode) return;
			var element = iElement[0], 
			options = iAttrs.cdCode.split(':');

			iAttrs.cdCode = options[0];
			iAttrs.flag = options[1];

			var scopes = {
				inParent: $scope.$parent, // Parent Scope
				inScope: $scope, // Current Scope
				inActual: iAttrs.flag === "inActual" && (function($scope, prop){
					do {
						if($scope.hasOwnProperty(prop)) return $scope;
					} while($scope = $scope.$parent);
					return $scope; // this is the outter most parent just in case it did not find any.
				})($scope, iAttrs.cdCode) // Existing Variable within the Scope or any Parent
			}, selectedScope;
			// console.log(scopes.inActual);

			selectedScope = scopes[iAttrs.flag] || scopes.inScope;
			selectedScope[iAttrs.cdCode] = element.outerHTML.replace(cdCodeRegExp,"");
		}
	};
}])
.directive('imgResponsive', [function () {
	return {
		restrict: 'E',
		scope: false,
		controller: function($scope, $element, $attrs, $transclude, otherInjectables) {

		},
		compile: function compile(tElement, tAttrs, transclude) {

		},
		link: function postLink(scope, iElement, iAttrs) {

		}
	};
}])