(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('auth', auth);

    /* @ngInject */
    function auth(api) {
        var service = {
            isAuthenticated: isAuthenticated,
            login: login,
            logout: logout,
            signup: signup
        };
        return service;

        function login(data) {
            return api.post(data, '/accounts/login');
        }

        function isAuthenticated() {
            return api.get('/accounts/is_authenticated');
        }

        function logout() {
            return api.post({}, '/accounts/logout');
        }

        function signup(data) {
            return api.post(data, '/accounts/signup');
        }
    }

})();
