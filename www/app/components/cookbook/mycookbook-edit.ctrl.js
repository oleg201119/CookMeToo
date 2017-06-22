(function() {
    'use strict';

    angular
    .module('foodapp.cookbook')
    .controller('MyCookBookEditCtrl', MyCookBookEditCtrl);

    MyCookBookEditCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading'];

    function MyCookBookEditCtrl($rootScope, $scope, $state, $ionicLoading) {

      $scope.recipes = [
        {
          id: 1,
          title: 'The Very Best Salisbury Steak',
          banner: 'img/sample/recipe-1.png'
        },
        {
          id: 2,
          title: 'Jolean\'s Cheese Potato & Smoked...',
          banner: 'img/sample/recipe-2.png'
        }
      ];

      $scope.moveUp = function(recipe) {
        console.log('moveUp');
        console.log(recipe);
      }

      $scope.moveDown = function(recipe) {
        console.log('moveDown');
        console.log(recipe);
      }

      $scope.moveTrash = function(recipe) {
        console.log('moveTrash');
        console.log(recipe);
      }

      $scope.save = function() {
        console.log('save');
      }

    }
})();
