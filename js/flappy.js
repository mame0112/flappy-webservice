var app = angular.module('FlappyApplication', []);

app.controller('FlappyController', function($scope){
	$scope.message = 'Test message';
});

app.directive("flappyHeader", function(){
	return {
		templateUrl: 'uicomponent/flappyHeader.html'
	};
});

app.directive("flappyFooter", function(){
	return {
		templateUrl: 'uicomponent/flappyFooter.html'
	};
});