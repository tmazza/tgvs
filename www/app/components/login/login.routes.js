(function () {
    'use strict';

    angular
        .module('tgvs')
        .config(config);

    /* @ngInject */
    function config($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'app/components/login/login.html',
            controller: 'LoginController as vm',
            resolve: {
                /* @ngInject */
                authenticate: function (routing) {
                    routing.redirectIfAuthenticated('/');
                }
            }
        });
    }

})();
