var SearchButton = (function () {
    'use strict';

    var dom, tvInput;

    function init(_dom) {
        dom = _dom;
        tvInput = document.getElementById('tv-name');
        bindUIActions();
    }

    /* Actions */
    function bindUIActions() {
        dom.addEventListener('click', function () {
            search(tvInput.value);
        });
    }

    function search(tvName) {
        api.get({
            url: settings.TMDB_SEARCH_URL,
            params: {
                api_key: settings.TMDB_API_KEY,
                query: tvName
            },
            success: function (response) {
                ResultList.showResult(response.results);
            }
        });
    }

    return {
        init: init
    };

})();
