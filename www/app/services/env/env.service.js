(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('env', env);

    /* @ngInject */
    function env(LOCAL_HOST, PRODUCTION, $window) {
        var service = {
            apiEp: apiEp
        };
        return service;

        function apiEp() {
            return $window.location.host.includes('localhost:') ? LOCAL_HOST : PRODUCTION;
        }
    }

})();
