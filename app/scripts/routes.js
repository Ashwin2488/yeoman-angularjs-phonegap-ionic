
// configure our routes
'use strict';
angular.module('phonegapAngularApp').
config(function($stateProvider, $urlRouterProvider, CONFIG) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'modules/menu/views/menu.html'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'modules/search/views/search.html'
      }
    }
  })


    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'modules/playlist/views/playlists.html',
          controller: 'playlistsController'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'modules/playlist/views/playlist.html',
        controller: 'playlistController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');

});
