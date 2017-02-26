(function () {
    'use strict';

    angular
        .module('tgvs')
        .directive('ggCard', ggCard);

    /* @ngInject */
    function ggCard(userCards) {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/ggCard/ggCard.html',
            scope: {
                card: '=',
                showMark: '='
            },
            link: link
        };
        return directive;

        function link(scope, element) {
            init();

            function init() {
                setMark();
                element.on('click', update);
                scope.$on('CARDS_UPDATED', function () {
                    scope.$apply(setMark);
                });
                scope.$on('LOGGED_OUT', function () {
                    scope.card.marked = false;
                });
            }

            function setMark() {
                scope.card.marked = marked();
            }

            function marked() {
                return userCards.has(scope.card.id);
            }

            function update() {
                if (scope.card.marked) {
                    userCards.remove(scope.card);
                } else {
                    userCards.add(scope.card);
                }

                scope.$apply(function () {
                    toggleMark();
                });
            }

            function toggleMark() {
                scope.card.marked = !scope.card.marked;
            }
        }
    }

})();
