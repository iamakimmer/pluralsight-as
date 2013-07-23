'use strict';

eventsApp.controller('MainMenuController', 
	function MainMenuController($scope, $location){
		$scope.createEvent = function(){
			console.log('absUrl: ', $location.absUrl());
			
		};
	}
);