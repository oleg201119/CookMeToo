(function() {
    'use strict';

    angular
        .module('foodapp.services')
        .factory('Order', Order);

    Order.$inject = ['$http', '$q', 'Config'];

    function Order($http, $q, Config) {

      var service = {};

      service.get_list = function() {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/order/get_list';

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
