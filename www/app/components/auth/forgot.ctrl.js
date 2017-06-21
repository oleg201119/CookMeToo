(function() {
    'use strict';

    angular
    .module('foodapp.auth')
    .controller('ForgotCtrl', ForgotCtrl);

    ForgotCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading'];

    function ForgotCtrl($rootScope, $scope, $state, $ionicLoading) {

      $scope.formdata = {
        email: ''
      };

    }
})();
