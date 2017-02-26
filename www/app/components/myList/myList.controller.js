(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('MyListController', MyListController);

    /* @ngInject */
    function MyListController($scope, tabs, userCards) {
        var vm = this;
        vm.cards = userCards.data;

        activate();

        function activate() {
            $scope.$on('$destroy', deactivateTab);
        }

        function deactivateTab() {
            tabs.deactivate('myList');
        }
    }

})();
