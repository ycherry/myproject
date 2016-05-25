(function() {
    'use strict';

    angular
        .module('myAngular')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, webDevTec, toastr, $http, getJsonService, $state) {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1464058054376;
        vm.showToastr = showToastr;
        vm.gotoDestination = gotoDestination;
        vm.tabCtrl="tab1";


        vm.readJson = getJsonService.query();

        activate();
        readJsonService();

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
                    vm.jsonData = data;
                })
                .error(function(data, status) {
                    vm.log(status);
                    //   error(status);
                    vm.status = status;
                });
        }

        function gotoDestination(tabCtrl) {
            switch (tabCtrl) {
                case 'tab1':
                    vm.tabCtrl="tab2"
                    console.log("called");
                    $state.go("home.tab1", {
                        tabId: vm.tabId
                    });
                    break;
                case 'tab2':
                    vm.tabCtrl="tab1"
                    $state.go("home.tab2");
                    break;
            }
        }
    }
})();
