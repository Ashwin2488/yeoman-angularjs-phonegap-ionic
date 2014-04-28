/* Name: routes.js
 * Version: 1.0
 * Author: Prokarma
 *
 * -------------------------------------------------------------
 * Copyright (c) 2012 Prokarma, Inc.
 * All Rights Reserved
 *
 * THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE.
 * The copyright notice above does not evidence any actual or
 * intended publication of such source code.
 * --------------------------------------------------------------
 */
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
