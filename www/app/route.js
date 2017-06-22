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

  .state('register', {
    url: '/register',
    templateUrl: 'app/components/auth/register.html',
    controller: 'RegisterCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'app/base/tabs.html'
  })

  .state('app.mycookbook', {
    url: '/mycookbook',
    views: {
      'tab-mycookbook': {
        templateUrl: 'app/components/cookbook/mycookbook.html',
        controller: 'MyCookBookCtrl'
      }
    }
  })

  .state('app.mycookbook-edit', {
    url: '/mycookbook-edit',
    views: {
      'tab-mycookbook': {
        templateUrl: 'app/components/cookbook/mycookbook-edit.html',
        controller: 'MyCookBookEditCtrl'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
