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
                scope.card.marked = marked();
                element.on('click', update);
            }

            function marked() {
                return userCards.has(scope.card.id);
            }

            function update() {
                scope.$apply(function () {
                    toggleMark();
                });

                if (scope.card.marked) {
                    userCards.remove(scope.card);
                } else {
                    userCards.add(scope.card);
                }
            }

            function toggleMark() {
                scope.card.marked = !scope.card.marked;
            }
        }
    }

})();
