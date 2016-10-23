(function () {
    'use strict';

    w3IncludeHTML(function () {

        /* DOM elements */
        var $tv = document.getElementById('tv-name'),
            $searchButton = document.getElementById('search-button'),
            $emptyButton = document.getElementById('empty-button'),
            $searchResults = document.getElementById('search-results'),
            $watchedList = document.getElementById('watched-list');

        /* Event listeners */
        $searchButton.addEventListener('click', function () {
            var url = settings.TMDB_SEARCH_URL + '?language=en-US' +
                      '&api_key=' + settings.TMDB_API_KEY +
                      '&query=' + $tv.value;

            api.get({
                url: url,
                success: function (response) {
                    $searchResults.innerHTML = '';

                    for (var i = 0; i < response.results.length; i++) {
                        tvList.add($searchResults, response.results[i]);
                    }
                }
            });
        });

        $emptyButton.addEventListener('click', function () {
            tvList.empty($searchResults);
        });

        $searchResults.addEventListener('click', function (event) {
            var $selected = event.target.closest('li');

            if (!$selected.classList.contains('gg-watched')) {
                $watchedList.appendChild($selected.cloneNode(true));
                $selected.classList.add('gg-watched');
            }
        });

    });

})();
