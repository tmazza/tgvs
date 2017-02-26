(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('userCards', userCards);

    /* @ngInject */
    function userCards($rootScope, api) {
        var service = {
            data: []
        };

        activate();

        return service;

        function activate() {
            clear();
            $rootScope.$on('LOGGED_IN', get);
            $rootScope.$on('LOGGED_OUT', clear);
        }

        function get() {
            api.get('/cards').then(success);

            function  success(res) {
                service.data = res.data;
            }
        }

        function clear() {
            service.data = [];
        }
    }

})();
