 (function() {
     'use strict';

     angular
         .module('myTabOne', [])
         .controller('myTabOneController', myTabOneController);

     function myTabOneController($scope,$stateParams,$state) {
         console.log("aaa"+$stateParams.tabId);
         $scope.tabId=$stateParams.tabId;
         console.log($state.current.data.current_page);
         console.log($state.current.data.page_size);
     }
 })();
