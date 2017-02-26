(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('TopRatedController', TopRatedController);

    /* @ngInject */
    function TopRatedController($scope, clock, tabs, tmdb) {
        var page = 1;

        var vm = this;
        vm.clock = clock;
        vm.cards = [];
        vm.get = get;

        activate();

        function activate() {
            $scope.$on('$destroy', deactivateTab);
            get();
        }

        function get() {
            tmdb.getTopRatedList(page).then(success);

            function success(res) {
                var cards = res.data.results;
                for (var i = 0; i < cards.length; i++) {
                    vm.cards.push(cards[i]);
                }
                page++;
            }
        }

        function deactivateTab() {
            tabs.deactivate('topRated');
        }
    }

})();
