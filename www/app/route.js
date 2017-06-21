angular.module('foodapp.route', [])

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('');
  $ionicConfigProvider.backButton.previousTitleText(false);
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  // setup an abstract state for the tabs directive

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'app/components/welcome/welcome.html',
    controller: 'WelcomeCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'app/components/auth/login.html',
    controller: 'LoginCtrl'
  })

  .state('forgot', {
    url: '/forgot',
    templateUrl: 'app/components/auth/forgot.html',
    controller: 'ForgotCtrl'
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome');
});
