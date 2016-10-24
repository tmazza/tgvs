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

                        var $lastAdded = $searchResults.lastChild,
                            lastAddedId = $lastAdded.getAttribute('id');

                        if (states.getWatchedList().includes(lastAddedId)) {
                            $lastAdded.classList.add('gg-watched');
                        }
                    }
                }
            });
        });

        $emptyButton.addEventListener('click', function () {
            tvList.empty($searchResults);
        });

        $searchResults.addEventListener('click', function (event) {
            var $selected = event.target.closest('li'),
                selectedId = $selected.getAttribute('id');

            if (!states.getWatchedList().includes(selectedId)) {
                $watchedList.appendChild($selected.cloneNode(true));
                $selected.classList.add('gg-watched');

                states.addTo('watchedList', selectedId);
            }
            else {
                var query = '#watched-list ' + '[id="' + selectedId + '"]';

                document.querySelector(query).remove();
                $selected.classList.remove('gg-watched');

                states.removeFrom('watchedList', selectedId)
            }

            console.log(states.getWatchedList());
        });

        $watchedList.addEventListener('click', function (event) {
            var $deleted = event.target.closest('li'),
                deletedId = $deleted.getAttribute('id'),
                query = '#search-results ' + '[id="' + deletedId + '"]';

            if (document.querySelector(query)) {
                document.querySelector(query).classList.remove('gg-watched');
            }

            $deleted.remove();

            states.removeFrom('watchedList', deletedId)

            console.log(states.getWatchedList());
        });

    });

})();
