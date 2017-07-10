(function() {
    'use strict';

    angular
        .module('foodapp.services')
        .factory('Cookbook', Cookbook);

    Cookbook.$inject = ['$http', '$q', 'Config'];

    function Cookbook($http, $q, Config) {

      var service = {};

      // add
      service.add = function(title, banner, link) {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/cookbook/add';
        var config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };

        var data = {
          title: title,
          banner: banner,
          link: link
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

      // get list
      service.get_list = function() {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/cookbook/get_list';

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

      // change sort order
      service.change_order = function(cookbook) {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/cookbook/change_order';
        var config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };

        var data = {
          cookbook: cookbook
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

      return service;
    }
})();
