'use strict';

(function () {

    w3IncludeHTML(function () {
        var tvInput = document.getElementById('tv-input'),
            searchButton = document.getElementById('search-button'),
            emptyButton = document.getElementById('empty-button'),
            resultList = new TvList('result-list'),
            watchedList = new TvList('watched-list');

        searchButton.addEventListener('click', function () {
            api.get({
                url: settings.TMDB_SEARCH_URL,
                params: {
                    api_key: settings.TMDB_API_KEY,
                    query: tvInput.value
                },
                success: function (response) {
                    resultList.insertAll(response.results, watchedList.getList());
                }
            });
        });

        emptyButton.addEventListener('click', function () {
            resultList.removeAll();
        });

        resultList.getDom().addEventListener('click', function (event) {
            var clicked = event.target.closest('li'),
                clickedId = clicked.getAttribute('id');

            if (watchedList.contains(clickedId)) {
                watchedList.removeOne(clickedId);
                resultList.unmark(clicked);
            }
            else {
                watchedList.insertOne(clicked.cloneNode(true));
                resultList.mark(clicked);
            }
        });

        watchedList.getDom().addEventListener('click', function (event) {
            var clicked = event.target.closest('li'),
                clickedId = clicked.getAttribute('id');

            try {
                resultList.unmark(clickedId);
            }
            catch (err) {
                console.log(err);
            }

            watchedList.removeOne(clicked);
        });
    });

})();
