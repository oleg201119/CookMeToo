angular.module('foodapp.directive')

.directive('recipe', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      recipe: '=',
    },
    templateUrl: 'app/components/recipe/recipe.directive.html',
    link: function(scope, elem, attrs) {
    }
  };
});
