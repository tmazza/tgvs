(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('auth', auth);

    /* @ngInject */
    function auth($rootScope, $auth) {
        var service = {
            isAuthenticated: isAuthenticated,
            login: login,
            logout: logout
        };
        return service;

        function isAuthenticated() {
            return $auth.isAuthenticated();
        }

        function login(token) {
            $auth.setToken(token);
            $rootScope.$broadcast('LOGGED_IN');
        }

        function logout() {
            $auth.logout();
            $rootScope.$broadcast('LOGGED_OUT');
        }
    }

})();
