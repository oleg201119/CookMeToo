(function() {
    'use strict';

    angular
        .module('foodapp.services')
        .factory('Auth', Auth);

    Auth.$inject = ['$http', '$q', 'Config'];

    function Auth($http, $q, Config) {

      var service = {};

      // register
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

      // login
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

      // reset password
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

      // change password
      service.change_password = function(old_password, new_password) {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/auth/change_password';
        var config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };

        var data = {
          old_password: old_password,
          new_password: new_password
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

      // get profile
      service.get_profile = function(user_id) {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/user/get_profile';
        var urlParams = 'id=' + encodeURIComponent(user_id);

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
