'use strict';

/**
 * @ngdoc function
 * @name apistoreWebAngularApp.controller:ComponentCtrl
 * @description
 * # ComponentCtrl
 * Controller of the apistoreWebAngularApp
 */
angular.module('apistoreWebAngularApp')
  .controller('ComponentCtrl', function ($scope) {
    $scope.componentList = [ 
			                    {componentId:"com1", componentDetails:"lara lappa"}, 
			                    {componentId:"com2", componentDetails:"mara lappa"}, 
			                   	{componentId:"com3", componentDetails:"jara lappa"}
                  		];
    $scope.requestList = [
   								{componentId:"com1", requestType:"GET", requestUrl:"localhost:8080/project/list", requestParams:"1"}, 
    							{componentId:"com1", requestType:"POST", requestUrl:"localhost:8080/project/list", requestParams:""}, 
    							{componentId:"com1", requestType:"OPTIONS", requestUrl:"localhost:8080/project/list", requestParams:""}, 
    							{componentId:"com1", requestType:"PUT", requestUrl:"localhost:8080/project/list", requestParams:""}, 
    							{componentId:"com1", requestType:"DELETE", requestUrl:"localhost:8080/project/list", requestParams:""}, 
    							{componentId:"com1", requestType:"HEAD", requestUrl:"localhost:8080/project/list", requestParams:""}
    					];
 
    /* $scope.hideActions = function(){
		$scope.component.expanded = false;
		console.log("false",this.component);
     };

     $scope.showActions = function(){
		$scope.component.expanded = true;
		console.log("true",this.component);
     };*/
  });
