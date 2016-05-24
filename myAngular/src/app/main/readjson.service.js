// var myService = angular.module('myService', []);

// myService.factory('readJsonService',function($http){
// 	var serviceMethod={
// 		getJsonData:function(success,error){
// 			$http.get('assets/json/repeat.json')
// 			.success(function(data,status,header,config){
// 				success(data);
// 			})
// 			.error(function(data,status,header,config){
// 				error(status);
// 			})
// 		}
// 	}
// 	return serviceMethod;
// });


(function() {
    'use strict';

    angular
        .module('myService', [])
        .factory('readJsonService', readJsonService);

    function readJsonService($http) {
        var serviceMethod = {
            // getJsonData: function(success, error) {
            //     $http.get('assets/json/repeat.json')
            //         .success(function(data, status, headers, config) {
            //             success(data);
            //         })
            //         .error(function(data, status, headers, config) {
            //             error(status);
            //         })
            // }

            getJsonData: function(success, error) {
                $http.get('assets/json/repeat.json')
                    .success(function(data, status, headers, config) {
                 //       success(data);
                    })
                    .error(function(data, status, headers, config) {
                        error(status);
                    });
            }
        }
        return serviceMethod;
    }

})();
