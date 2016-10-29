var tmdb = (function () {
    var searchTv = function (tvName, success) {
        api.get({
            url: settings.TMDB_SEARCH_URL,
            params: {
                api_key: settings.TMDB_API_KEY,
                query: tvName,
                language: 'en-US'
            },
            success: success
        });
    }

    var searchTvDetails = function (tvId, success) {
        api.get({
            url: settings.TMDB_TV_URL + tvId.split('tvid').pop() + '?',
            params: {
                api_key: settings.TMDB_API_KEY,
                language: 'en-US'
            },
            success: success
        });
    }

    return {
        searchTv: searchTv,
        searchTvDetails: searchTvDetails
    };
})();
