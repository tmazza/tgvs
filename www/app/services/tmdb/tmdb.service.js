(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('tmdb', tmdb);

    /* @ngInject */
    function tmdb(TMDB_API_KEY, TMDB_API_URL, TMDB_LAN, $http, $httpParamSerializer) {
        var service = {
            getTopRatedList: getTopRatedList,
            searchByName: searchByName,
            getTvDetailsById: getTvDetailsById,
            getMinutesFromRes: getMinutesFromRes
        };
        return service

        function getTopRatedList(page) {
            return $http({
                method: 'GET',
                url: TMDB_API_URL + '/tv/top_rated?' + createQueryString({
                    name: 'page',
                    value: page
                })
            });
        }

        function searchByName(query) {
            return $http({
                method: 'GET',
                url: TMDB_API_URL + '/search/tv?' + createQueryString({
                    name: 'query',
                    value: query
                })
            });
        }

        function getTvDetailsById(id) {
            return $http({
                method: 'GET',
                url: TMDB_API_URL + '/tv/' + id + '?' + createQueryString()
            });
        }

        function getMinutesFromRes(res) {
            var ep_minutes = Math.max.apply(null, res.data.episode_run_time);
            var total_eps = res.data.number_of_episodes;
            return ep_minutes * total_eps;
        }

        function createQueryString(param) {
            var params = {
                api_key: TMDB_API_KEY,
                language: TMDB_LAN
            };
            if (param) {
                params[param.name] = param.value;
            }
            return $httpParamSerializer(params);
        }
    }

})();
