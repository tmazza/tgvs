(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('api', api);

    /* @ngInject */
    function api($http, env) {
        var service = {
            get: get,
            post: post,
            patch: patch,
            delete: del
        };
        return service;

        function get(url) {
            return $http({
                method: 'GET',
                url: env.apiEp() + url
            });
        }

        function post(data, url) {
            return requestWithData('POST', data, url);
        }

        function patch(data, url) {
            return requestWithData('PATCH', data, url);
        }

        function del(data, url) {
            return $http({
                method: 'DELETE',
                url: env.apiEp() + url + data
            });
        }

        function requestWithData(method, data, url) {
            return $http({
                method: method,
                url: env.apiEp() + url,
                data: data
            });
        }
    }

})();
