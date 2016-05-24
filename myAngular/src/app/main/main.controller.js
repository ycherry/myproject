(function() {
    'use strict';

    angular
        .module('myAngular')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, webDevTec, toastr, $scope,readJsonService) {
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
        $scope.jsonData=readJsonService.getJsonData();

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

    }
})();
