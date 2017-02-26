(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('MyListController', MyListController);

    /* @ngInject */
    function MyListController(userCards) {
        var vm = this;
        vm.cards = userCards.data;
    }

})();
