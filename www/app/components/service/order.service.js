(function() {
    'use strict';

    angular
        .module('foodapp.services')
        .factory('Order', Order);

    Order.$inject = ['$http', '$q', 'Config'];

    function Order($http, $q, Config) {

      var service = {};

      // get order list
      service.get_orderlist = function() {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/order/get_orderlist';

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

      // make order
      service.make_order = function(recipe_id, servings, delivery_time, delivery_date, comment) {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/order/make_order';
        var config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };

        var data = {
          recipe_id: recipe_id,
          servings: servings,
          delivery_time: delivery_time,
          delivery_date: delivery_date,
          comment: comment
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

      // make offer
      service.make_offer = function(order_id, cost, message) {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/order/make_offer';
        var config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };

        var data = {
          order_id: order_id,
          cost: cost,
          message: message
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

      // get offer list
      service.get_offerlist = function() {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/order/get_offerlist';

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

      // act for offer (accept or decline)
      service.act_offer = function(offer_id, action) {
        var deferred = $q.defer();

        var url = Config.BASE_URL + '/order/act_offer';
        var config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };

        var data = {
          offer_id: offer_id,
          action: action
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
