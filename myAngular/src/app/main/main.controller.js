(function() {
    'use strict';

    angular
        .module('myAngular')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, webDevTec, toastr, $http, $state, getJsonService) {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1464058054376;
        vm.showToastr = showToastr;
        vm.gotoDestination = gotoDestination;
        vm.tabCtrl = "tab1";


        //      vm.readJson = getJsonService.query();
        getJsonService.getJsonData(
            function(data) { 
                vm.readJson = data; 
            },
            function(status) { 
                vm.readJson = status; 
            });
       // $scope.readJson=getJsonService.query();
       vm.includeUrl="app/components/ngIncludeTest/ng-include-test.template.html";
       vm.name = "test parent";
       vm.purpose = "test ng-include parent";

       vm.obj={
        name:"object parent name"
       };

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
        };
        vm.ngRepeatArray=["one","two","three"];

        vm.testInt = 1;
        vm.testString = "testEqualString1";
        vm.testEqualArray = ["one","two","three"];
        vm.testEqualObjact = {
            "name":"object",
            "purpose":"test"
        };

        vm.testAtInt = 2;
        vm.testAtString ="testAtString1";
        vm.testAtArray = ["four","five","six"];
        vm.testAtObject = {
            "name":"AtObject",
            "purpose":"test"
        };

        vm.testFunction = function(){
            vm.functionName = "testFunction";
        }

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

        function gotoDestination(tabCtrl) {
            switch (tabCtrl) {
                case 'tab1':
                    vm.tabCtrl = "tab2"
                    console.log("called");
                    $state.go("home.tab1", {
                        tabId: vm.tabId
                    });
                break;
            
                case 'tab2':
                    vm.tabCtrl = "tab1"
                    $state.go("home.tab2");
                    break;
            }
        }
    }
})();
