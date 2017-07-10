(function() {
    'use strict';

    angular
    .module('foodapp.cookbook')
    .controller('MyCookBookCtrl', MyCookBookCtrl);

    MyCookBookCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading', 'Cookbook'];

    function MyCookBookCtrl($rootScope, $scope, $state, $ionicLoading, Cookbook) {

      $scope.recipes = [
        {
          id: 1,
          title: 'The Very Best Salisbury Steak test test test test test test',
          banner: 'img/sample/recipe-1.png'
        },
        {
          id: 2,
          title: 'Jolean\'s Cheese Potato & Smoked...',
          banner: 'img/sample/recipe-2.png'
        }
      ];

      $scope.edit = function() {
        $state.go('app.mycookbook-edit');
      }

      $scope.detail = function() {

      }

      $scope.get_cookbook = function() {
        $ionicLoading.show();

        Cookbook.get_list().then(
          function(data) {
            $ionicLoading.hide();
          },
          function(error) {
            $ionicLoading.hide();
          }
        );
      }

      $scope.init = function() {
        $scope.get_cookbook();
      }

      // Init
      $scope.init();
    }
})();
