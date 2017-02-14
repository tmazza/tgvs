(function () {
    'use strict';

    angular
        .module('tgvs')
        .directive('ggCard', ggCard);

    /* @ngInject */
    function ggCard(user) {
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
                scope.card.marked = mark();
                element.on('click', update);
            }

            function mark() {
                return user.indexOfCard(scope.card.id) > -1;
            }

            function toggleMark() {
                scope.card.marked = !scope.card.marked;
            }

            function update() {
                var promise;

                if (scope.card.marked) {
                    promise = user.removeCard(scope.card);
                } else {
                    promise = user.addCard(scope.card);
                }

                if (promise) {
                    promise.then(function () {
                        toggleMark();
                    });
                } else {
                    scope.$apply(function () {
                        toggleMark();
                    });
                }
            }
        }
    }

})();
