angular.module('foodapp.config', [])

.value(
  'Config', {
    //'ENV': 'prod',
    //'BASE_URL': 'http://server/mobile/api/',

    'ENV': 'dev',
    'BASE_URL': 'http://localhost:8100/mobile/api/',
  }
);
