(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('SignupController', SignupController);

    /* @ngInject */
    function SignupController($scope, $location, auth) {
        var vm = this;
        vm.formData = {};
        vm.errors = false;
        vm.signup = signup;

        activate();

        function activate() {
            auth.isAuthenticated().then(function (res) {
                if (res.data.is_authenticated) {
                    $location.url('/');
                }
            });
        }

        function signup() {
            vm.errors = false;
            auth.signup(vm.formData).then(function (res) {
                $scope.$emit('LOGGED_IN');
                $location.url('/');
            }).catch(function (res) {
                vm.errors = res.data;
            });
        }
    }

})();
