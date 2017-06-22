angular.module('foodapp.directive')

.directive('cookbookCard', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      recipe: '=',
    },
    templateUrl: 'app/components/cookbook/cookbook-card.directive.html',
    link: function(scope, elem, attrs) {      
    }
  };
});
