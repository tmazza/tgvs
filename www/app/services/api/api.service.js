(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('api', api);

    /* @ngInject */
    function api($http, $cookies, env) {
        var service = {
            get: get,
            post: post,
            patch: patch
        };
        return service;

        function get(url) {
            return $http({
                method: 'GET',
                url: env.apiEp() + url,
                withCredentials: true
            });
        }

        function post(data, url) {
            return requestWithCsrftoken('POST', data, url);
        }

        function patch(data, url) {
            return requestWithCsrftoken('PATCH', data, url);
        }

        function requestWithCsrftoken(method, data, url) {
            return $http({
                method: method,
                url: env.apiEp() + url,
                data: data,
                headers: {'X-CSRFToken': getCsrftoken()},
                withCredentials: true
            });
        }

        function getCsrftoken() {
            return $cookies.get('csrftoken');
        }
    }

})();
