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
config(function($routeProvider, CONFIG) {
  $routeProvider.when('/home', {
    templateUrl: 'modules/main/views/layout.html',
    module: 'HomeScreen',
    controller: 'homeScreenController'

  })
    .otherwise({
      redirectTo: '/home'
    });

});
