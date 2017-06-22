angular.module('foodapp.directive')

.directive('cookbookCard', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: 'app/components/cookbook/cookbook-card.directive.html',
    link: function(scope, elem, attrs) {      
      scope.banner = attrs.banner;
      scope.title = attrs.title;
    }
  };
});
