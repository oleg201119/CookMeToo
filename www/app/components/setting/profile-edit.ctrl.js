(function() {
    'use strict';

    angular
    .module('foodapp.setting')
    .controller('ProfileEditCtrl', ProfileEditCtrl);

    ProfileEditCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading'];

    function ProfileEditCtrl($rootScope, $scope, $state, $ionicLoading) {

      $scope.profile = {
        id: 1,
        name: 'Ekaterina Semeshina',
        avatar: 'img/avatar/avatar-40@2x.png',
        banner: 'img/background/profile-banner@2x.png',

        chef: {
          id: 1,
          name: 'Ekaterina Semeshina',
          avatar: 'img/avatar/avatar-40@2x.png',
          rate: 5
        }
      }
    }
})();
