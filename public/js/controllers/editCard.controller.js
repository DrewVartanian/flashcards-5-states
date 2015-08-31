app.controller('EditCardController', function ($scope, FlashCardsFactory, $state, $stateParams) {
	$scope.categories = FlashCardsFactory.categories;
  console.log($stateParams);
	$scope.newCard = {
		    question: $stateParams.questions,
		    category: $stateParams.categories,
		    answers: $stateParams.answers
		};
	// $scope.state = $state.current;
	// $scope.params = $stateParams;
	$scope.saveCard = function () {
		FlashCardsFactory.updateCard($scope.card)
		.then(function (updatedCard) {
			$scope.$parent.editing = false;
		});
	};
});