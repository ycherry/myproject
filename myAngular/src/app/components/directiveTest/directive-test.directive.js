(function() {
	'use strict';

	angular
	.module("my-directive-test.directive",[])
	.directive('myDirective',myDirective);

	function myDirective(){
		return {
			restrict: 'E',
			templateUrl: 'app/components/directiveTest/directive.template.html',
			// scope: false
			scope: true
			// scope:{
			// 	testInt: '=',
			// 	testString: '=',
			// 	testAtInt: '@',
			// 	testAtString: '@',
			// 	testFunction: '&'
			// }

		}
	}
})();  