angular.module('foodapp.directive')

.directive('paymentPanel', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      payment: '=',
    },
    templateUrl: 'app/components/setting/payment-panel.directive.html',
    link: function(scope, elem, attrs) {
    }
  };
});
