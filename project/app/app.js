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
                    tvList.addCards($resultList, response.results, 'result');
                }
            });
        });

        $emptyButton.addEventListener('click', function () {
            tvList.empty($resultList);
        });

        $resultList.addEventListener('click', function (event) {
            var $selected = event.target.closest('li'),
                selectedId = $selected.getAttribute('id'),
                queryId = selectedId.replace('result', 'watched'),
                query = '#watched-list ' + '[id="' + queryId + '"]',
                $queried = document.querySelector(query);

            if ($queried) {
                $queried.remove();
                $selected.classList.remove('gg-watched');
            }
            else {
                var $newWatched = $selected.cloneNode(true),
                    newId = selectedId.replace('result', 'watched');

                $newWatched.setAttribute('id', newId);
                $watchedList.appendChild($newWatched);
                $selected.classList.add('gg-watched');
            }
        });

        $watchedList.addEventListener('click', function (event) {
            var $selected = event.target.closest('li'),
                selectedId = $selected.getAttribute('id'),
                queryId = selectedId.replace('watched', 'result'),
                query = '#result-list ' + '[id="' + queryId + '"]',
                $queried = document.querySelector(query);

            if ($queried) {
                $queried.classList.remove('gg-watched');
            }

            $selected.remove();
        });

    });

})();
