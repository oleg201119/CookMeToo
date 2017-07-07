(function() {
    'use strict';

    angular
    .module('foodapp.setting')
    .controller('PaymentsCtrl', PaymentsCtrl);

    PaymentsCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading'];

    function PaymentsCtrl($rootScope, $scope, $state, $ionicLoading) {

      $scope.payments = [
        {
          id: 1,
          title: 'Chocolat Fondant sdf sdf sdf sdf sdf sdfsfdsdf',
          profile: {
            id: 1,
            name: 'Ekaterina Semeshina sdf sdf sdf sdf sdfsdfs df sdf',
            avatar: 'img/avatar/avatar-40@2x.png',
          },
          fund: {
            amount: '$ 200.25',
            date: '15.03.2017 13:45'
          }
        },
        {
          id: 2,
          title: 'Chocolat Fondant',
          profile: {
            id: 1,
            name: 'Ekaterina Semeshina',
            avatar: 'img/avatar/avatar-40@2x.png',
          },
          fund: {
            amount: '$ 200.25',
            date: '15.03.2017 13:45'
          }
        }
      ];
    }
})();
