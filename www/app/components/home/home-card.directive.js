angular.module('foodapp.directive')

.directive('homeCard', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      recipe: '='
    },
    templateUrl: 'app/components/home/home-card.directive.html',
    link: function(scope, elem, attrs) {
    }
  };
});
