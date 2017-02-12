(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('GgHeaderController', GgHeaderController);

    /* @ngInject */
    function GgHeaderController($scope, $location, auth, user) {
        var vm = this;
        vm.user = user;
        vm.isAuthenticated = false;
        vm.logout = logout;

        activate();

        function activate() {
            auth.isAuthenticated().then(function (res) {
                vm.isAuthenticated = res.data.is_authenticated;
                if (vm.isAuthenticated) {
                    user.getAll();
                }
            });

            $scope.$on('LOGGED_IN', function () {
                vm.isAuthenticated = true;
            });

            $scope.$on('LOGGED_OUT', function () {
                vm.isAuthenticated = false;
            });
        }

        function logout() {
            auth.logout().then(function () {
                $scope.$broadcast('LOGGED_OUT');
                $location.url('/');
            });
        }
    }

})();
