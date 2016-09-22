(function () {
    'use strict';

    angular
        .module('tgvs')
        .directive('tgvsFilmCard', [
            filmCard
        ]);

    function filmCard() {
        return {
            restrict: 'E',
            scope: {

            },
            templateUrl:'app/components/film-card.html'
        };
    }

})();
