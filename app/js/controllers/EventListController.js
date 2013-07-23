'use strict';

eventsApp.controller('EventListController', function EventListController($scope, eventData){
	$scope.events  = [{
	    "name": "Angular Boot Camp",
	    "date": "01/01/2013",
	    "time": "10:30 AM",
	    "location": {
	        "address": "Google Headquarters",
	        "city": "MountainView",
	        "province": "CA"
	    },
	    "imageUrl": "img/logo.png"
	},
	{
	    "name": "JavaScript Boot Camp",
	    "date": "01/01/2013",
	    "time": "10:30 AM",
	    "location": {
	        "address": "Google Headquarters",
	        "city": "MountainView",
	        "province": "CA"
	    },
	    "imageUrl": "img/logo.png"
	},
	{
	    "name": "Ember Boot Camp",
	    "date": "01/01/2013",
	    "time": "10:30 AM",
	    "location": {
	        "address": "Ember",
	        "city": "New York",
	        "province": "NY"
	    },
	    "imageUrl": "img/logo.png"
	}];
});