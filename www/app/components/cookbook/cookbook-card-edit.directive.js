angular.module('foodapp.directive')

.directive('cookbookCardEdit', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      recipe: '=',
      moveUp: '&',
      moveDown: '&',
      moveTrash: '&'
    },
    templateUrl: 'app/components/cookbook/cookbook-card-edit.directive.html',
    link: function(scope, elem, attrs) {
    }
  };
});
