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

  .state('app.recipe-detail', {
    url: '/recipe-detail',
    views: {
      'tab-home': {
        templateUrl: 'app/components/home/recipe-detail.html',
        controller: 'RecipeDetailCtrl'
      }
    }
  })

  .state('app.offer-make', {
    url: '/offer-make',
    views: {
      'tab-home': {
        templateUrl: 'app/components/home/offer-make.html',
        controller: 'OfferMakeCtrl'
      }
    }
  })

  .state('app.offer-detail', {
    url: '/offer-detail',
    views: {
      'tab-home': {
        templateUrl: 'app/components/home/offer-detail.html',
        controller: 'OfferDetailCtrl'
      }
    }
  })

  .state('app.order-make', {
    url: '/order-make',
    views: {
      'tab-home': {
        templateUrl: 'app/components/home/order-make.html',
        controller: 'OrderMakeCtrl'
      }
    }
  })

  .state('app.order-detail', {
    url: '/order-detail',
    views: {
      'tab-home': {
        templateUrl: 'app/components/home/order-detail.html',
        controller: 'OrderDetailCtrl'
      }
    }
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'tab-setting': {
        templateUrl: 'app/components/setting/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('app.profile-edit', {
    url: '/profile-edit',
    views: {
      'tab-setting': {
        templateUrl: 'app/components/setting/profile-edit.html',
        controller: 'ProfileEditCtrl'
      }
    }
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'tab-setting': {
        templateUrl: 'app/components/setting/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('app.password-change', {
    url: '/password-change',
    views: {
      'tab-setting': {
        templateUrl: 'app/components/setting/password-change.html',
        controller: 'PasswordChangeCtrl'
      }
    }
  })

  .state('app.review-leave', {
    url: '/review-leave',
    views: {
      'tab-notifications': {
        templateUrl: 'app/components/notification/review-leave.html',
        controller: 'ReviewLeaveCtrl'
      }
    }
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/password-change');
});
