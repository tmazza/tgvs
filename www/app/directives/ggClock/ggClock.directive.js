(function () {
    'use strict';

    angular
        .module('tgvs')
        .directive('ggClock', ggClock);

    function ggClock() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/directives/ggClock/ggClock.html',
            scope: {
                minutes: '='
            }
            // link: link
        };
        return directive;

        // function link(scope) {
        //     init();

        //     function init() {
        //         scope.totalMinutes = 0;
        //         get();
        //         scope.$on('UPDATE_CLOCK', update);
        //         scope.$on('LOGGED_OUT', clear);
        //     }

        //     function get() {
        //         for (var i = 0; i < userCards.data.length; i++) {
        //             update(null, userCards.data[i].minutes);
        //         }
        //     }

        //     function update(event, minutes) {
        //         console.log(minutes);
        //         scope.totalMinutes += minutes;
        //     }

        //     function clear() {
        //         scope.totalMinutes = 0;
        //     }
        // }
    }

})();
