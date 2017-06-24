angular.module('foodapp.directive')

.directive('orderCard', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      order: '='
    },
    templateUrl: 'app/components/home/order-card.directive.html',
    link: function(scope, elem, attrs) {
    }
  };
});
