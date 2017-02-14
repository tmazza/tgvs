(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('GgHeaderController', GgHeaderController);

    /* @ngInject */
    function GgHeaderController($rootScope, $scope, $location, auth, user) {
        var vm = this;
        vm.user = user;
        vm.inTopRated = false;
        vm.inSearch = false;
        vm.logout = logout;

        activate();

        function activate() {
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
            auth.logout().then(function () {
                $rootScope.$broadcast('LOGGED_OUT');
                $location.url('/');
            });
        }
    }

})();
