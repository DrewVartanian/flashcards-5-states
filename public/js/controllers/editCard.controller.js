app.controller('EditCardController', function ($scope, FlashCardsFactory, $state, $stateParams) {
	$scope.categories = FlashCardsFactory.categories;

	$scope.saveCard = function () {
		FlashCardsFactory.updateCard($scope.card)
		.then(function (updatedCard) {
			$scope.$parent.editing = false;
			$state.go('cards');
		});
	};

	$scope.getCard = function(id){
		FlashCardsFactory.getFlashCard(id).then(function(card){
			$scope.card = card;
		});
	};
	$scope.getCard($stateParams.id);
});