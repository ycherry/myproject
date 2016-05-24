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
      .state('footer',{
        url:'footer',
        templateUrl:'app/components/footer/footer.html',
        controller:'footer.controller',
        controllerAs:'footer'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
