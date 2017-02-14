(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('user', user);

    /* @ngInject */
    function user($rootScope, auth, api, tmdb) {
        var service = {
            isAuthenticated: undefined,
            profile: {},
            cards: [],
            indexOfCard: indexOfCard,
            addCard: addCard,
            removeCard: removeCard
        };

        activate();

        return service;

        function activate() {
            auth.isAuthenticated().then(function (res) {
                service.isAuthenticated = res.data.is_authenticated;
                if (service.isAuthenticated) {
                    loggedIn();
                }
            });
            $rootScope.$on('LOGGED_IN', loggedIn);
            $rootScope.$on('LOGGED_OUT', loggedOut);
        }

        function loggedIn() {
            service.isAuthenticated = true;
            getProfile();
            getCards();
        }

        function loggedOut() {
            service.isAuthenticated = false;
            clear();
        }

        function getProfile() {
            api.get('/accounts/profile').then(function (res) {
                service.profile = res.data;
            });
        }

        function getCards() {
            api.get('/cards').then(function (res) {
                service.cards = res.data.cards;
                $rootScope.$broadcast('CARDS_READY');
            });
        }

        function indexOfCard(id) {
            for (var i = 0; i < service.cards.length; i++) {
                if (service.cards[i].id === id) {
                    return i;
                }
            }
            return -1;
        }

        function addCard(card) {
            tmdb.getTvDetailsById(card.id).then(function (res) {
                card.minutes = tmdb.getMinutesFromRes(res);
                service.cards.push(card);
                $rootScope.$broadcast('UPDATE_CLOCK', card.minutes);
                if (service.isAuthenticated) {
                    return api.post(card, '/cards');
                }
            });
        }

        function removeCard(card) {
            service.cards.splice(indexOfCard(card.id), 1);
            $rootScope.$broadcast('UPDATE_CLOCK', -card.minutes);
            if (service.isAuthenticated) {
                return api.delete({id: card.id}, '/cards');
            }
        }

        function clear() {
            service.profile = {};
            service.cards = [];
        }
    }

})();
