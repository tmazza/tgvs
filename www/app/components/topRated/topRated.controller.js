(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('TopRatedController', TopRatedController);

    /* @ngInject */
    function TopRatedController($scope, tmdb) {
        var vm = this;
        var page = 1;
        vm.cards = [];
        vm.get = get;

        activate();

        function activate() {
            $scope.$emit('IN_TOP_RATED');
            $scope.$on('LOGGED_OUT', clear);
            $scope.$on('$destroy', function () {
                $scope.$emit('LEAVE_TOP_RATED');
            });
            get();
        }

        function get() {
            tmdb.getTopRatedList(page).then(function (res) {
                var cards = res.data.results;
                for (var i = 0; i < cards.length; i++) {
                    vm.cards.push(cards[i]);
                }
                page++;
            });
        }

        function clear() {
            page = 1;
            vm.cards = [];
            get();
        }
    }

})();
