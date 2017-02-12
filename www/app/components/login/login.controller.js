(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($scope, $location, auth) {
        var vm = this;
        vm.formData = {};
        vm.errors = false;
        vm.login = login;

        activate();

        function activate() {
            auth.isAuthenticated().then(function (res) {
                if (res.data.is_authenticated) {
                    $location.url('/');
                }
            });
        }

        function login() {
            vm.errors = false;
            auth.login(vm.formData).then(function (res) {
                $scope.$emit('LOGGED_IN');
                $location.url('/');
            }).catch(function (res) {
                vm.errors = res.data;
            });
        }
    }

})();
