(function () {
    'use strict';

    angular
        .module('tgvs')
        .config(config);

    /* @ngInject */
    function config($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/components/topRated/topRated.html',
            controller: 'TopRatedController as vm'
        });
    }

})();
