var app = angular.module('FlappyApplication', []);

app.controller('FlappyController', function($scope){
	$scope.message = 'Test message';

	$scope.buttonClicked = function(){
		console.log("button clicked");
		$scope.message = 'Button clicked!';
	};

});

//Inject Header
app.directive("flappyHeader", function(){
	return {
		templateUrl: 'uicomponent/flappyHeader.html'
	};
});

//Inject footer
app.directive("flappyFooter", function(){
	return {
		templateUrl: 'uicomponent/flappyFooter.html'
	};
});