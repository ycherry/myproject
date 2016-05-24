(function() {
    'use strict';

    angular
        .module('myFooter.directive', [])
        .directive('myFooter', myFooter);

    function myFooter() {
        return {
            restrict: 'A',
            templateUrl: 'app/components/footer/footer.html',
            controller: function($scope) {
                $scope.footer="hi I'm footer";
            }
        }
    }

    // function footerController($scope) {
    //     $scope.footer = "Hello footer";
    // }
})();
