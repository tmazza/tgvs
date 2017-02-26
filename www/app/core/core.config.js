(function () {
    'use strict';

    angular
        .module('tgvs')
        .config(config);

    /* @ngInject */
    function config($authProvider, $locationProvider, $routeProvider) {
        $authProvider.tokenType = 'JWT';
        $locationProvider.hashPrefix('');
        $routeProvider.otherwise({redirectTo: '/'});
    }

})();
