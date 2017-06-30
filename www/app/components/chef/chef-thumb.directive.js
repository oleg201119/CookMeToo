angular.module('foodapp.directive')

.directive('chefThumb', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      chef: '=',
    },
    templateUrl: 'app/components/chef/chef-thumb.directive.html',
    link: function(scope, elem, attrs) {

      scope.stars = [1, 1, 0, 0, 0];
    }
  };
});
