
//making sure the config is available before angular bootstrapping
'use strict';
angular.element(document).ready(function() {
  var initInjector = angular.injector(['ng']);
  var $http = initInjector.get('$http');
  $http.get('config/config.json').then(function(response) {
    angular.module('phonegapAngularApp').constant('CONFIG', response.data);
    angular.bootstrap(document, ['phonegapAngularApp']);

  });
});

// Define all your modules

angular.module('Playlist', []);
angular.module('Search', []);


// Lastly, define your "main" module and inject all other modules as dependencies
angular.module('phonegapAngularApp', [
  'Playlist',
  'Search',
  'ngRoute',
  'ionic',
  'ngAnimate',
  'ui.router'
]);
