'use strict';

eventsApp.factory('eventData', function ($resource, $q, $timeout) {
	return {
		getEvent: function () {
			var deferred = $q.defer();


			$timeout(function(){
				$resource('/data/event/1.json', {})
					.get({id:1},
					function(event){
						deferred.resolve(event);
					},
					function(response){
						deferred.reject(response);
					});

				
			}, 3000);
			return deferred.promise;
		}
	}
});;
			
 

