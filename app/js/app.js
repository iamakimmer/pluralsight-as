'use strict';


// Declare app level module which depends on filters, and services
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngCookies'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider.when('/timeoutSample', {
			templateUrl: 'templates/TimeoutSample.html', controller: 'TimeoutServiceController'
		});
		$routeProvider.when('/cacheSample', {
			templateUrl: 'templates/CacheSample.html', controller: 'CacheSampleController'
		});
		$routeProvider.when('/cookieSample', {
			templateUrl: 'templates/CookieStoreSample.html', controller: 'CookieStoreSampleController'
		});
		$routeProvider.when('/compileSample', {
			templateUrl: 'templates/CompileSample.html', controller: 'CompileSampleController'
		});		
		$routeProvider.when('/filterSample', {
			templateUrl: 'templates/FilterSample.html', controller: 'FilterSampleController'
		});		
		$routeProvider.when('/localeSample', {
			templateUrl: 'templates/LocaleSample.html', controller: 'LocaleSampleController'
		});	
		$routeProvider.when('/sampleDirective', {
			templateUrl: 'templates/SampleDirective.html', controller: 'SampleDirectiveController'
		});		
		$routeProvider.when('/eventList', {
			templateUrl: 'templates/EventList.html', controller: 'EventListController'
		});		
		$routeProvider.when('/editProfile', {
			templateUrl: 'templates/EditProfile.html', controller: 'EditProfileController'
		});		

		$routeProvider.when('/', {
			foo: 'bar',
			resolve: {
				event: function($q, $route, eventData){
					var deferred = $q.defer();
					eventData.getEvent().then(function(event) { deferred.resolve(event); });
				}
			},
			templateUrl: 'templates/EventDetails.html', controller: 'EventController'
		});	
		$routeProvider.otherwise({redirectTo: '/'});

		//$locationProvider.html5Mode(true);

	})
	.factory('myCache', function($cacheFactory){
		return $cacheFactory('myCache', {capacity: 3});
	});
