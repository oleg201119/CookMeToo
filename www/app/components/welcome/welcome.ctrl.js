(function() {
    'use strict';

    angular
    .module('foodapp.welcome')
    .controller('WelcomeCtrl', WelcomeCtrl);

    WelcomeCtrl.$inject = ['$rootScope', '$scope', '$state', 'UserType'];

    function WelcomeCtrl($rootScope, $scope, $state, UserType) {

      $scope.setUserType = function(userType) {
        if (userType == 'customer') {
          console.log(UserType.customer);
        }
        else if (userType == 'chef') {
          console.log(UserType.chef);
        }

        $state.go('login');
      }
    }
})();
