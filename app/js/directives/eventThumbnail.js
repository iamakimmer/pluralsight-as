'use strict';

eventsApp.directive('eventThumbnail', function(){
	return {
		restrict: 'E', //use an element
		replace: true,
		templateUrl: '/templates/directives/eventThumbnail.html',
		scope: {
			event: "=event" 
		}
	}
});