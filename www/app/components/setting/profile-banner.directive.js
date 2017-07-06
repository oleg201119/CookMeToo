angular.module('foodapp.directive')

.directive('profileBanner', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      profile: '=',
    },
    templateUrl: 'app/components/setting/profile-banner.directive.html',
    link: function(scope, elem, attrs) {
    }
  };
});
