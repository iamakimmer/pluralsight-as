'use strict';


//validation on keydown
eventsApp.directive('dateKeys', function($compile){
	return {
		//restrict: 'E',
		retrict: 'A',
		link: function(scope, element, attrs, controller){
			element.on('keydown', function(event) {
				return false;
			});
		}
	};

});