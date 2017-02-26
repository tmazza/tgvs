(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('clock', clock);

    /* @ngInject */
    function clock($rootScope, userCards) {
        var service = {
            data: {
                days: 0,
                hours: 0,
                minutes: 0
            }
        };

        activate();

        return service;

        function activate() {
            $rootScope.$on('CARDS_UPDATED', getMinutes);
            $rootScope.$on('LOGGED_OUT', clear);
        }

        function getMinutes() {
            for (var i = 0; i < userCards.data.length; i++) {
                service.data.minutes += userCards.data[i].minutes;
            }
            console.log(service.data.minutes);
        }

        function clear() {
            data.days = 0;
            data.hours = 0;
            data.minutes = 0;
        }
    }

})();
