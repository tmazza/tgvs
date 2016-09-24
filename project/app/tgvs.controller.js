(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('TgvsController', [
            'tmdbService',
            TgvsController,
        ]);

    function TgvsController() {
        var vm = this;

        vm.content = '\\o/';
    }

})();
