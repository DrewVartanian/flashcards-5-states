var app = angular.module('flashCards', ['ui.router']);

app.value('currentFlashCards', []);

app.config(function($stateProvider){
  $stateProvider.state('home',{
    url: '/',
    templateUrl: '/views/home.html',
  }).state('stats',{
    url: '/stats',
    templateUrl: '/views/stats.html',
    controller: 'StatsController'
  }).state('newCard',{
    url: '/new_card',
    templateUrl: '/views/new_card.html',
    controller: 'NewCardController'
  }).state('cards',{
    url: '/cards',
    templateUrl: '/views/cards.html',
    controller: 'MainController'
  }).state('manageCard',{
    url: '/manageCard/:id',
    templateUrl: '/views/manageCard.html',
    controller: function($scope, $stateParams){
      $scope.cardId = $stateParams.id;
    }
  }).state('manageCard.edit',{
    url: '/edit/',
    templateUrl: '/views/edit_card.html',
    controller: 'EditCardController'
  }).state('manageCard.delete',{
    url: '/manageCard/delete/:id',
    templateUrl: '/views/delete_card.html',
    controller: 'DeleteCardController'
  });
      // {
      //   name: 'edit',
      //   templateUrl: '/views/edit_card.html',
      //   controller: 'EditCardController',
      // },
      // {
      //   name: 'delete',
      //   templateUrl: ''
      // }
});