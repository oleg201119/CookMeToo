(function() {
    'use strict';

    angular
    .module('foodapp.cookbook')
    .controller('MyCookBookCtrl', MyCookBookCtrl);

    MyCookBookCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading'];

    function MyCookBookCtrl($rootScope, $scope, $state, $ionicLoading) {

      $scope.recipes = [
        {
          title: 'The Very Best Salisbury Steak',
          banner: 'img/sample/recipe-1.png'
        },
        {
          title: 'Jolean\'s Cheese Potato & Smoked...',
          banner: 'img/sample/recipe-2.png'
        }
      ];

      $scope.goDetail = function() {
        console.log('goDetail');
      }

    }
})();
