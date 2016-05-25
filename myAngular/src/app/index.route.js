(function() {
    'use strict';

    angular
        .module('myAngular')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('home.header', {
                url: 'header',
                templateUrl: 'app/components/header/header.html',
                controller: 'myHeaderController'
            })
            .state('home.tab1', {
                url: 'tab1',
                templateUrl: 'app/components/tab1/tab1.html',
                controller: 'myTabOneController',
                params: {
                    "tabId": ""
                },
                data: {
                    current_page: "tabone page",
                    page_size: "unknown"
                }
            })
            // .state('home.tab2',{
            //   url:'/tab2',
            //   templateUrl:'app/components/tab2/tab2.html'
            // }
            .state('home.tab2', {
                url: 'tab2',
                views: {
                    '': { templateUrl: 'app/components/tab2/tab2.html' },
                    'template1@home.tab2': { template: 'hi I am template1' },
                    'template2@home.tab2': {
                        templateUrl: 'app/components/tab2/template2.html'
                    }
                }
                //    templateUrl:'app/components/tab2/tab2.html'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
