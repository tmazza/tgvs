(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($location, api, auth) {
        var vm = this;
        vm.formData = {};
        vm.errors = false;
        vm.login = login;

        function login() {
            vm.errors = false;

            api.post(vm.formData, '/accounts/login').then(success).catch(fail);

            function success(res) {
                auth.login(res.data.token);
                $location.url('/');
            }

            function fail(res) {
                vm.errors = res.data;
            }
        }
    }

})();
