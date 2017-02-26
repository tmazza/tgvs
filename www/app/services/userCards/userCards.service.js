(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('userCards', userCards);

    /* @ngInject */
    function userCards($rootScope, api, auth, tmdb) {
        var service = {
            data: [],
            has: has,
            add: add,
            remove: remove
        };

        activate();

        return service;

        function activate() {
            $rootScope.$on('LOGGED_IN', get);
            $rootScope.$on('LOGGED_OUT', clear);
        }

        function get() {
            api.get('/cards').then(success);

            function  success(res) {
                service.data = res.data;
            }
        }

        function has(id) {
            if (indexOf(id) > -1) {
                return true;
            }
            return false;
        }

        function add(card) {
            tmdb.getTvDetailsById(card.id).then(success);

            function success(res) {
                /* Update app data. */
                card.minutes = tmdb.getMinutesFromRes(res);
                service.data.push(card);

                /* Update api data. */
                if (auth.isAuthenticated()) {
                    api.post(card, '/cards');
                }
            }
        }

        function remove(card) {
            /* Update app data. */
            service.data.splice(indexOf(card.id), 1);

            /* Update api data. */
            if (auth.isAuthenticated()) {
                return api.delete({id: card.id}, '/cards');
            }
        }

        function indexOf(id) {
            for (var i = 0; i < service.data.length; i++) {
                if (service.data[i].id === id) {
                    return i;
                }
            }
            return -1;
        }

        function clear() {
            service.data = [];
        }
    }

})();
