(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('user', user);

    /* @ngInject */
    function user($rootScope, api) {
        var service = {
            profile: {},
            cards: {},
            getAll: getAll,
            getProfile: getProfile,
            getCards: getCards
        };

        activate();

        return service;

        function activate() {
            $rootScope.$on('LOGGED_IN', getAll);
            $rootScope.$on('LOGGED_OUT', clear);
        }

        function getAll() {
            getProfile();
            getCards();
        }

        function getProfile() {
            api.get('/accounts/profile').then(function (res) {
                service.profile = res.data;
            });
        }

        function getCards() {
            api.get('/cards').then(function (res) {
                service.cards = res.data;
            });
        }

        function clear() {
            service.profile = {};
            service.cards = {};
        }
    }

})();
