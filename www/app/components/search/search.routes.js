(function () {
    'use strict';

    angular
        .module('tgvs')
        .config(config);

    /* @ngInject */
    function config($routeProvider) {
        $routeProvider.when('/search', {
            templateUrl: 'app/components/search/search.html',
            controller: 'SearchController as vm',
            resolve: {
                /* @ngInject */
                tab: function (tabs) {
                    tabs.activate('search');
                }
            }
        });
    }

})();
