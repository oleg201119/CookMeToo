(function() {
    'use strict';

    angular
    .module('foodapp.service')
    .factory('Auth', Auth);

    Auth.$inject = ['$http', '$q', 'Config'];

    function Auth($http, $q, Config) {

      var service = {};



      return service;
    }
})();
