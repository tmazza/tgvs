(function () {
    'use strict';

    angular
        .module('tgvs')
        .config(config);

    /* @ngInject */
    function config($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/components/home/home.html'
        });
    }

})();
