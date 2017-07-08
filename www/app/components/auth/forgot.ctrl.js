(function() {
    'use strict';

    angular
    .module('foodapp.auth')
    .controller('ForgotCtrl', ForgotCtrl);

    ForgotCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading', 'Auth'];

    function ForgotCtrl($rootScope, $scope, $state, $ionicLoading, Auth) {

      $scope.formdata = {
        email: ''
      };

      $scope.reset = function() {
        Auth.reset_password($scope.formdata.email).then(
          function(data) {
            $state.go('login');
          },
          function(error) {

          }
        );
      }

    }
})();
