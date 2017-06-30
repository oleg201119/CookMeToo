(function() {
    'use strict';

    angular
    .module('foodapp.home')
    .controller('OfferDetailCtrl', OfferDetailCtrl);

    OfferDetailCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading'];

    function OfferDetailCtrl($rootScope, $scope, $state, $ionicLoading) {

      $scope.offer = {
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
        },
        price: '$ 130.00 AUD',
        chef: {
          id: 1,
          name: 'Ekaterina Semeshina',
          avatar: 'img/avatar/avatar-40@2x.png',
          rate: 5
        }
      };
    }
})();
