(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('MyListController', MyListController);

    /* @ngInject */
    function MyListController(user) {
        var vm = this;
        vm.user = user;
    }

})();
