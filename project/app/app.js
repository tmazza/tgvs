(function () {
    'use strict';

    w3IncludeHTML(function () {

        /* DOM elements */
        var $tv = document.getElementById('tv-name'),
            $searchButton = document.getElementById('search-button'),
            $emptyButton = document.getElementById('empty-button'),
            $resultList = document.getElementById('result-list'),
            $watchedList = document.getElementById('watched-list');

        /* Event listeners */
        $searchButton.addEventListener('click', function () {
            api.get({
                url: settings.TMDB_SEARCH_URL,
                params: {
                    api_key: settings.TMDB_API_KEY,
                    query: $tv.value
                },
                success: function (response) {
                    tvList.addCards($resultList, response.results);
                }
            });
        });

        $emptyButton.addEventListener('click', function () {
            tvList.empty($resultList);
        });

        $resultList.addEventListener('click', function (event) {
            var $selected = event.target.closest('li'),
                selectedId = $selected.getAttribute('id'),
                query = '#watched-list ' + '[id="' + selectedId + '"]',
                $queried = document.querySelector(query);

            if ($queried) {
                $queried.remove();
                $selected.classList.remove('gg-watched');
            }
            else {
                $watchedList.appendChild($selected.cloneNode(true));
                $selected.classList.add('gg-watched');
            }
        });

        $watchedList.addEventListener('click', function (event) {
            var $selected = event.target.closest('li'),
                selectedId = $selected.getAttribute('id'),
                query = '#search-results ' + '[id="' + selectedId + '"]',
                $queried = document.querySelector(query);

            if ($queried) {
                $queried.classList.remove('gg-watched');
            }

            $selected.remove();
        });

    });

})();
