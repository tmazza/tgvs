(function () {
    'use strict';

    angular
        .module('tgvs')
        .directive('ggHeader', ggHeader);

    function ggHeader() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/directives/ggHeader/ggHeader.html',
            controller: 'GgHeaderController',
            controllerAs: 'vm'
        };
        return directive;
    }

})();
