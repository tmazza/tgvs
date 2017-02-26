(function () {
    'use strict';

    angular
        .module('tgvs')
        .config(config);

    /* @ngInject */
    function config($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: 'app/components/profile/profile.html',
            controller: 'ProfileController as vm',
            resolve: {
                /* @ngInject */
                authenticate: function (routing) {
                    routing.redirectIfNotAuthenticated('/');
                }
            }
        });
    }

})();
