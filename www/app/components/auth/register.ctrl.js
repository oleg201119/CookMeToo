(function() {
    'use strict';

    angular
    .module('foodapp.auth')
    .controller('RegisterCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['$rootScope', '$scope', '$state', '$ionicLoading'];

    function RegisterCtrl($rootScope, $scope, $state, $ionicLoading) {

      $scope.formdata = {
        email: '',
        password: '',
        name: ''
      };

    }
})();
