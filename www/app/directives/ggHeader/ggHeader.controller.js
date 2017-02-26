(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('GgHeaderController', GgHeaderController);

    /* @ngInject */
    function GgHeaderController(auth, tabs, user) {
        var vm = this;
        vm.user = user;
        vm.tabs = tabs.data;
        vm.isAuthenticated = auth.isAuthenticated;
        vm.logout = logout;

        activate();

        function activate() {
            if (auth.isAuthenticated()) {
                user.get();
            }
        }

        function logout() {
            auth.logout();
        }
    }

})();
