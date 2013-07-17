'use strict';

eventsApp.controller('EventController', function EventController($scope) {
	$scope.sortorder = 'name';
	$scope.event = {
		name: "Angular Boot Camp",
		date: "01/01/2013",
		time: "10:30 AM",
		location: {
			address: 'Google Headquarters',
			city: 'Mountain View',
			province: 'CA'
		},
		imageUrl: "img/logo.png",
		sessions: [
			{
				name: 'Directives Masterclass',
				creatorName: 'Bob Smith',
				duration: '1hr',
				level: 'Advanced',
				abstract: 'In this session you will learn about directives',
				upVoteCount: 0
			}, 
			{
				name: 'Scopes for fun and profit',
				creatorName: 'Matt Kim',
				duration: '4hr',
				level: 'Advanced',
				abstract: 'In this session you will learn about scopes',
				upVoteCount: 0			
			},
			{
				name: 'Mastering Controllers',
				creatorName: 'Bob Smith',
				duration: '1hr',
				level: 'Advanced',
				abstract: 'In this session you will learn about controllers',
				upVoteCount: 0				
			}
		]
	};	

	$scope.upVoteSession = function(session){
		session.upVoteCount++;
	};

	$scope.downVoteSession = function(session){
		session.upVoteCount--;
	};	
});