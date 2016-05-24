// (function() {
//     'use strict';

//     angular
//         .module('myService', ['ngResource'])
//         .factory('readJsonService', readJsonService);

//     function readJsonService($http) {
//         var serviceMethod = {

//             getJsonData: function(success, error) {
//                 $http.get('assets/json/repeat.json')
//                     .success(function(data, status, headers, config) {
//                         success(data);
//                     })
//                     .error(function(data, status, headers, config) {
//                         error(status);
//                     });
//             }
//         }
//         return serviceMethod;
//     }

// })();


(function() {
    'use strict';

    angular
        .module('myService', ['ngResource'])
        .factory('getJsonService', getJsonService);

    function getJsonService($resource) {
       
    return  $resource('assets/json/repeat.json',{},{
     query:{
             method:'GET',
             isArray:true
            }   
        });
     }
})();

