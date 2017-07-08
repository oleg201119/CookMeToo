(function() {
    'use strict';

    angular
        .module('foodapp.services')
        .factory('Auth', Auth);

    Auth.$inject = ['$http', '$q', 'Config'];

    function Auth($http, $q, Config) {

      var service = {};

      service.register = function(email, password, name) {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/auth/register';
        var config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };

        var data = {
          email: email,
          password: password,
          name: name
        };

        console.log(data);

        $http.post(url, data, config)
          .success(function(response) {
            console.log(response);
            deferred.resolve(response);
          })
          .error(function(error) {
            console.log(error);
            deferred.reject(error);
          });

        return deferred.promise;
      }

      service.login = function(email, password) {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/auth/login';
        var urlParams = 'email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password);

        url = url + '?' + urlParams;

        var config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };

        $http.get(url, config)
          .success(function(response) {
            console.log(response);
            deferred.resolve(response);
          })
          .error(function(error) {
            console.log(error);
            deferred.reject(error);
        });

        return deferred.promise;
      }

      service.reset_password = function(email) {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/auth/reset_password';
        var urlParams = 'email=' + encodeURIComponent(email);

        url = url + '?' + urlParams;

        var config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };

        $http.get(url, config)
          .success(function(response) {
            console.log(response);
            deferred.resolve(response);
          })
          .error(function(error) {
            console.log(error);
            deferred.reject(error);
        });

        return deferred.promise;
      }

      return service;
    }
})();
