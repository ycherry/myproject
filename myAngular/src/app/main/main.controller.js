(function() {
    'use strict';

    angular
        .module('myAngular')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, webDevTec, toastr, $scope, $http, getJsonService) {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1464058054376;
        vm.showToastr = showToastr;
        // $scope.jsonData = [{
        //     "name": "aaa",
        //     "age": "17",
        //     "hobby": "basketball"
        // }, {
        //     "name": "bbb",
        //     "age": "19",
        //     "hobby": "football"
        // }, {
        //     "name": "aaa",
        //     "age": "23",
        //     "hobby": "badminton"
        // }];
       readJsonService();

       $scope.readJson=getJsonService.query();

        activate();

        function activate() {
            getWebDevTec();
            $timeout(function() {
                vm.classAnimation = 'rubberBand';
            }, 4000);
        }

        function showToastr() {
            toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
            vm.classAnimation = '';
        }

        function getWebDevTec() {
            vm.awesomeThings = webDevTec.getTec();

            angular.forEach(vm.awesomeThings, function(awesomeThing) {
                awesomeThing.rank = Math.random();
            });
        }

        // function success(data){
        //     $scope.data=data;
        //     console.log($scope.data);
        // }

        // function error(status){
        //     $scope.status=status;
        // }

         function readJsonService() {
                $http.get('assets/json/repeat.json')
                    .success(function(data) {
                      // success(data);
                      $scope.jsonData=data;
                    })
                    .error(function(data, status) {
                       angular.log(status);
                     //   error(status);
                     $scope.status=status;
                    });
    }


    }
})();
