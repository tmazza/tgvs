(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('user', user);

    /* @ngInject */
    function user($rootScope, api) {
        var service = {
            data: {},
            get: get
        };

        activate();

        return service;

        function activate() {
            clear();
            $rootScope.$on('LOGGED_IN', get);
            $rootScope.$on('LOGGED_OUT', clear);
        }

        function get() {
            api.get('/accounts/profile').then(success);

            function success(res) {
                service.data = res.data;
            }
        }

        function clear() {
            service.data = {};
        }
    }

})();
