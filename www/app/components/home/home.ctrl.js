(function() {
    'use strict';

    angular
    .module('foodapp.home')
    .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading'];

    function HomeCtrl($rootScope, $scope, $state, $ionicLoading) {

      $scope.orders = [
        {
          recipe: {
            id: 1,
            title: 'The Very Best Salisbury Steak',
            banner: 'img/sample/recipe-1.png'
          },
          delivery: {
            date: '03/20/2017',
            time: '20:30',
            servings: 5,
            status: 'pending'
          }
        },
        {
          recipe: {
            id: 2,
            title: 'Jolean\'s Cheese Potato & Smoked...',
            banner: 'img/sample/recipe-2.png'
          },
          delivery: {
            date: '03/20/2017',
            time: '20:30',
            servings: 1,
            status: 'pending'
          }
        }
      ];

      $scope.detail = function() {
        
      }
    }
})();
