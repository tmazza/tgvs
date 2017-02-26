(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('routing', routing);

    /* @ngInject */
    function routing($location, auth) {
        var service = {
            redirectIfAuthenticated: redirectIfAuthenticated,
            redirectIfNotAuthenticated: redirectIfNotAuthenticated
        };
        return service;

        function redirectIfAuthenticated(url) {
            if (auth.isAuthenticated()) {
                $location.url(url);
            }
        }

        function redirectIfNotAuthenticated(url) {
            if (!auth.isAuthenticated()) {
                $location.url(url);
            }
        }
    }

})();
