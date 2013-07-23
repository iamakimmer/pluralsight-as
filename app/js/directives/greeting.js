eventsApp.directive('greeting', function(){
	return {
		restrict: 'E',
		replace: true,
		template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
		controller: 'GreetingController'
	}
});


eventsApp.directive('finnish', function(){
	return {
		restrict: 'A',
		require: 'greeting',
		link: function(scope,element,attrs,controller){
			controller.addGreeting('hei');
		}
	}
});

eventsApp.directive('hindi', function(){
	return {
		restrict: 'A',
		require: 'greeting',
		link: function(scope,element,attrs,controller){
			controller.addGreeting('namisti');
		}
	}
});

eventsApp.controller('GreetingController', 
	function GreetingController($scope) {
		var greetings = ['hello'];
		$scope.sayHello = function(){
			alert(greetings.join());
		}
		this.addGreeting = function(greeting){
			greetings.push(greeting);
		}
});