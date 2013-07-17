'use strict';

eventsApp.controller('TimeoutServiceController', function TimeoutServiceController($scope, $timeout){
	var promise = $timeout(function(){
		$scope.name = "john doe";
	}, 3000);

	$scope.cancel = function(){
		$timeout.cancel(promise);
	};
});