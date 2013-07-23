'use strict';


//validation on keydown
eventsApp.directive('collapsible', function($compile){
	return {
		//restrict: 'E',
		restrict: 'E',
		replace: true,
		template: '<div><h4 ng-click="toggleVisibility()" class="well-title">{{title}}</h4><div ng-show="visible" ng-transclude></div></div>',
		transclude: true,
		scope: {
			title: '@'
		},
		controller: function($scope) {
			$scope.visible = true;
			$scope.toggleVisibility = function() {
				$scope.visible = !$scope.visible;
			}
		}
	};

});