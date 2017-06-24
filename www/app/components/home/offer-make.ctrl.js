(function() {
    'use strict';

    angular
    .module('foodapp.home')
    .controller('OfferMakeCtrl', OfferMakeCtrl);

    OfferMakeCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading'];

    function OfferMakeCtrl($rootScope, $scope, $state, $ionicLoading) {

      $scope.offer = {
        id: 1,
        title: 'The Very Best Salisbury Steak',
        banner: 'img/sample/recipe-1.png',
        delivery: {
          date: '03/20/2017',
          time: '20:30',
          servings: 5,
          status: 'pending'
        }
      };
    }
})();
