(function () {
    'use strict';

    angular
        .module('tgvs')
        .config(config);

    /* @ngInject */
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.otherwise({redirectTo: '/'});
    }

})();
