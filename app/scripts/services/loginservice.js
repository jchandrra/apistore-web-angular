'use strict';

/**
 * @ngdoc service
 * @name apistoreWebAngularApp.loginService
 * @description
 * # loginService
 * Service in the apistoreWebAngularApp.
 */
angular.module('apistoreWebAngularApp')
  .service('loginService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var admin = 'admin';
    var pass = 'pass';
    var isAuthenticated = false;
    
    return {
      login : function(username, password) {
      	console.log(username, " and ", password);
        isAuthenticated = username === admin && password === pass;
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
  });
