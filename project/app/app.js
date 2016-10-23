(function () {
    'use strict';

    w3IncludeHTML(function () {

        /* DOM elements */
        var $tv = document.getElementById('tv-name'),
            $searchButton = document.getElementById('search-button'),
            $emptyButton = document.getElementById('empty-button'),
            $searchResults = document.getElementById('search-results'),
            $selected = document.getElementById('selected');

        /* Event listeners */
        $searchButton.addEventListener('click', function () {
            api.get({
                query: $tv.value,
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

    });

})();
