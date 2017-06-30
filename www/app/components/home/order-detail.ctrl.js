(function() {
    'use strict';

    angular
    .module('foodapp.home')
    .controller('OrderDetailCtrl', OrderDetailCtrl);

    OrderDetailCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading'];

    function OrderDetailCtrl($rootScope, $scope, $state, $ionicLoading) {

      $scope.order = {
        recipe: {
          id: 1,
          title: 'The Very Best Salisbury Steak',
          banner: 'img/sample/recipe-1.png',
          bannertitle: 'http://www.veganricha.com/2016/04/chickpea-flour-scramble.html',
          url: 'http://www.veganricha.com/2016/04/chickpea-flour-scramble.html'
        },
        delivery: {
          date: '03/20/2017',
          time: '20:30',
          servings: 5,
          comment: '',
          address: 'Arbat 24, 100001 Moscow, Russian Federation'
        }
      };
    }
})();
