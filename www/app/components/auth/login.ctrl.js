(function() {
    'use strict';

    angular
    .module('foodapp.auth')
    .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading'];

    function LoginCtrl($rootScope, $scope, $state, $ionicLoading) {

      $scope.formdata = {
        email: '',
        password: ''
      };
      
    }
})();
