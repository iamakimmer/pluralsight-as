'use strict';


// Declare app level module which depends on filters, and services
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngCookies'])
	.config(function($routeProvider) {
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
		$routeProvider.when('/', {
			foo: 'bar',
			templateUrl: 'templates/EventDetails.html', controller: 'EventController'
		});	
		$routeProvider.otherwise({redirectTo: '/'});



	})
	.factory('myCache', function($cacheFactory){
		return $cacheFactory('myCache', {capacity: 3});
	});
