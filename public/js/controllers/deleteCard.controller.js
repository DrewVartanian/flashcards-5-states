app.controller('DeleteCardController', function($scope, $state, FlashCardsFactory, $stateParams){

	$scope.deleteCard = function(){
		console.log('hello');
		FlashCardsFactory.deleteCard($stateParams.id).then(function(data){
			console.log(data);
			$state.go('cards');
		});
	};
});