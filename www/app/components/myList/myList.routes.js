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
                authenticate: function (routing) {
                    routing.redirectIfNotAuthenticated('/');
                }
            }
        });
    }

})();
