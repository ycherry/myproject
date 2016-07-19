 (function() {
     'use strict';

     angular
         .module('myHeader', [])
         .controller('myHeaderController', myHeaderController);

     function myHeaderController($scope) {
         $scope.headerContent = "hi I'm header";
     }
 })();
