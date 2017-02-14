(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('ProfileController', ProfileController);

    /* @ngInject */
    function ProfileController(user) {
        var vm = this;
        vm.user = user;
    }

})();
