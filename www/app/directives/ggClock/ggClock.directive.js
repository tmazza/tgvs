(function () {
    'use strict';

    angular
        .module('tgvs')
        .directive('ggClock', ggClock);

    /* @ngInject */
    function ggClock(user) {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/directives/ggClock/ggClock.html',
            link: link
        };
        return directive;

        function link(scope) {
            init();

            function init() {
                scope.totalMinutes = 0;
                scope.$on('CARDS_READY', get);
                scope.$on('UPDATE_CLOCK', update);
                scope.$on('LOGGED_OUT', clear);
            }

            function get() {
                for (var i = 0; i < user.cards.length; i++) {
                    update(null, user.cards[i].minutes);
                }
            }

            function update(event, minutes) {
                console.log(minutes);
                scope.totalMinutes += minutes;
            }

            function clear() {
                scope.totalMinutes = 0;
            }
        }
    }

})();
