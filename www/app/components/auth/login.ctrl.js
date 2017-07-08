(function() {
    'use strict';

    angular
    .module('foodapp.auth')
    .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading', 'Auth'];

    function LoginCtrl($rootScope, $scope, $state, $ionicLoading, Auth) {

      $scope.formdata = {
        email: '',
        password: ''
      };

      $scope.login = function() {
        Auth.login($scope.formdata.email, $scope.formdata.password).then(
          function(data) {
            $state.go('app.home');
          },
          function(error) {

          }
        );
      }
    }
})();
