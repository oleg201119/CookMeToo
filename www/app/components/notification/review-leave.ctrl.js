(function() {
    'use strict';

    angular
    .module('foodapp.notification')
    .controller('ReviewLeaveCtrl', ReviewLeaveCtrl);

    ReviewLeaveCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading'];

    function ReviewLeaveCtrl($rootScope, $scope, $state, $ionicLoading) {

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

      $scope.ratingsObject = {
        iconOn: 'ion-ios-star',    //Optional
        iconOff: 'ion-ios-star-outline',   //Optional
        iconOnColor: 'rgb(255, 190, 25)',  //Optional
        iconOffColor:  'rgb(255, 190, 25)',    //Optional
        rating:  2, //Optional
        minRating:1,    //Optional
        readOnly: false, //Optional
        callback: function(rating, index) {    //Mandatory
          $scope.ratingsCallback(rating, index);
        }
      };

      $scope.ratingsCallback = function(rating, index) {
        console.log('Selected rating is : ', rating, ' and the index is : ', index);
      };

    }
})();
