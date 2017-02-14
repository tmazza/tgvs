(function () {
    'use strict';

    angular
        .module('tgvs')
        .config(config);

    /* @ngInject */
    function config($routeProvider) {
        $routeProvider.when('/signup', {
            templateUrl: 'app/components/signup/signup.html',
            controller: 'SignupController as vm',
            resolve: {
                /* @ngInject */
                authenticate: function ($location, auth) {
                    auth.isAuthenticated().then(function (res) {
                        if (res.data.is_authenticated) {
                            $location.url('/');
                        }
                    });
                }
            }
        });
    }

})();
