angular.module('foodapp.directive')

.directive('recipeBanner', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      recipe: '=',
    },
    templateUrl: 'app/components/recipe/recipe-banner.directive.html',
    link: function(scope, elem, attrs) {
    }
  };
});
