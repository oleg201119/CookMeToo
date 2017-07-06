angular.module('foodapp', [
  'ionic',

  'foodapp.config',
  'foodapp.constant',
  'foodapp.directive',
  'foodapp.route',

  'foodapp.welcome',
  'foodapp.auth',
  'foodapp.cookbook',
  'foodapp.home',
  'foodapp.setting',
  'foodapp.notification',

  'ionic-ratings'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
