(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('tgvsController', [
            'tmdbService',
            tgvsController,
        ]);

    function tgvsController() {
        var vm = this;

        vm.content = '\\o/';
    }

})();
