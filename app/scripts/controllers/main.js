'use strict';

/**
 * @ngdoc function
 * @name apistoreWebAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apistoreWebAngularApp
 */
angular.module('apistoreWebAngularApp')
  .controller('MainCtrl', function ($scope) {
   $scope.projectList = [ 
   {projectId:"101", projectName:"raas", projectDescription:"this is project raas", projectEmail:"raas@gmail.com",seal:"1011"},
   {projectId:"102", projectName:"capture", projectDescription:"this is project capture", projectEmail:"capture@gmail.com",seal:"1012"}
   
                  ];

     $scope.saveProject = function() {
      console.log("submitted", this.form.projectName); 
      $scope.show_add_component= true;
    };
    $scope.saveComponent = function() {
      
      console.log("submitted"); 
    };

  $scope.availableFieldTypes = [
  								"BOOLEAN", "INT", "BIGINT", "DECIMAL", "FLOAT", "DOUBLE",
								"BIT", "CHAR", "VARCHAR", "BINARY", "CHAR BYTE", "BLOB",
								"TEXT", "LONGTEXT", "ENUM", "DATE", "TIME", "DATETIME",
								"TIMESTAMP", "YEAR"
  							];
  $scope.fields = [/*{"fieldType":"fieldType"}, {"fieldName":"fieldName"}*/];
  
  $scope.addField = function() {
    var newItemNo = $scope.fields.length+1;
    $scope.fields.push({"fieldName":""});
  };
    
  $scope.removeField = function() {
    var lastItem = $scope.fields.length-1;
    $scope.fields.splice(lastItem);
  };

  });
