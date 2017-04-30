'use strict';

/**
 * @ngdoc function
 * @name apistoreWebAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the apistoreWebAngularApp
 */
angular.module('apistoreWebAngularApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $stateParams, $state, loginService) {
    $rootScope.title = "Welcome to ApiStore";
    
    $scope.formSubmit = function() {
      if(loginService.login($scope.username, $scope.password)) {
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('main');
      } else {
        $scope.error = "Incorrect username/password !";
      }   
    };
  });
