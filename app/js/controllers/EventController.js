'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $anchorScroll, $route) {
	$scope.sortorder = 'name';
	$scope.event  = eventData.getEvent();
	$scope.event.then(
		function(event) { console.log(event); },
		function(response) { console.log(response); }
	);

 	
	console.log($route.current.foo);

	$scope.upVoteSession = function(session){
		session.upVoteCount++;
	};

	$scope.downVoteSession = function(session){
		session.upVoteCount--;
	};

	$scope.scrollToSession = function(){
		$anchorScroll();
	}

	$scope.reload = function(){
		$route.reload();
	}
});