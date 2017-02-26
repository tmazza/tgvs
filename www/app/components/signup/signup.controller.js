(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('SignupController', SignupController);

    /* @ngInject */
    function SignupController($location, api, auth) {
        var vm = this;
        vm.formData = {};
        vm.errors = false;
        vm.signup = signup;

        function signup() {
            vm.errors = false;

            api.post(vm.formData, '/accounts/signup').then(success).catch(fail);

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
