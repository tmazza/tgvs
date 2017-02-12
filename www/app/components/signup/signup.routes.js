(function () {
    'use strict';

    angular
        .module('tgvs')
        .config(config);

    /* @ngInject */
    function config($routeProvider) {
        $routeProvider.when('/signup', {
            templateUrl: 'app/components/signup/signup.html',
            controller: 'SignupController as vm'
        });
    }

})();
