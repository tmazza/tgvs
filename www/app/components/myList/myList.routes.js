(function () {
    'use strict';

    angular
        .module('tgvs')
        .config(config);

    /* @ngInject */
    function config($routeProvider) {
        $routeProvider.when('/my_list', {
            templateUrl: 'app/components/myList/myList.html',
            controller: 'MyListController as vm',
            resolve: {
                /* @ngInject */
                authenticate: function ($location, auth) {
                    auth.isAuthenticated().then(function (res) {
                        if (!res.data.is_authenticated) {
                            $location.url('/');
                        }
                    });
                }
            }
        });
    }

})();
