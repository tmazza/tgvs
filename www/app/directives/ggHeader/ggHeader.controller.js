(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('GgHeaderController', GgHeaderController);

    /* @ngInject */
    function GgHeaderController($scope, auth, user) {
        var vm = this;
        vm.isAuthenticated = auth.isAuthenticated;
        vm.user = user;
        vm.inTopRated = false;
        vm.inSearch = false;
        vm.logout = logout;

        activate();

        function activate() {
            user.get();

            $scope.$on('IN_TOP_RATED', function () {
                vm.inTopRated = true;
            });

            $scope.$on('IN_SEARCH', function () {
                vm.inSearch = true;
            });

            $scope.$on('LEAVE_TOP_RATED', function () {
                vm.inTopRated = false;
            });

            $scope.$on('LEAVE_SEARCH', function () {
                vm.inSearch = false;
            });
        }

        function logout() {
            auth.logout();
        }
    }

})();
