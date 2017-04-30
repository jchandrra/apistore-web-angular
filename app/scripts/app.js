'use strict';

/**
 * @ngdoc overview
 * @name apistoreWebAngularApp
 * @description
 * # apistoreWebAngularApp
 *
 * Main module of the application.
 */
var app = angular
  .module('apistoreWebAngularApp', ['ui.router',
  									'smart-table'
  								]);
app.run(function($rootScope, $location, $state, loginService) {
    $rootScope.$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams){ 
      
	      /*if(toState.name !== 'login' && !loginService.isAuthenticated()) {
	      	console.log("not authenticated");
	      	event.preventDefault();
	        $state.go('login');
	      }else{
	      	$state.go('main');
	      	console.log('Changed state to: ' + toState.name);
	      }*/
      });

});
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    // For any unmatched url, send to /business
    $urlRouterProvider.otherwise("/main")
     
    $stateProvider
    		.state('login', {
		        url : '/login',
		        templateUrl : 'views/login.html',
		        controller : 'LoginCtrl'
		      })
            .state('main', {//State demonstrating Nested views
                url: "/main",
                templateUrl: "views/main.html",
                controller : 'MainCtrl'
            })
            .state('dashboard', {//State demonstrating Nested views
                url: "/dashboard",
                templateUrl: "views/dashboard.html",
                controller : 'DashboardCtrl'
            })
            .state('main.component', {//nested state [products is the nested state of business state]
                url: "/component",
                parent: 'main',
                templateUrl: "views/component.html",
                controller: 'ComponentCtrl'
            })
            
}]);
