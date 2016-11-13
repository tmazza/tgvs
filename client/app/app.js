'use strict';

(function () {

    w3IncludeHTML(function () {
        var tvInput = document.getElementById('tv-input'),
            searchButton = document.getElementById('search-button'),
            searchWarning = document.getElementById('search-warning'),
            timeCounter = new TimeCounter('time-counter'),
            modal = new Modal('tv-modal'),
            resultList = new TvList('result-list'),
            watchedList = new TvList('watched-list'),
            rankedList = new TvList('ranked-list'),
            rankedListAddButton = document.getElementById('ranked-list-add-button'),
            rankedListPage = 1,
            tempDom;

        /* Helper functions */
        var toggleSearchWarning = function (state) {
            if (state === 'show') {
                searchWarning.style.display = 'block';
            }
            else if (state === 'hide') {
                searchWarning.style.display = 'none';
            }
        }

        var searchTv = function (tvName) {
            tmdb.searchTv(tvName, function (response) {
                resultList.removeAll();
                if (response.results.length > 0) {
                    toggleSearchWarning('hide');
                    resultList.insertAll(response.results, watchedList.getList());
                }
                else {
                    toggleSearchWarning('show');
                }
            });
        };

        var searchTvList = function (rankType, page) {
            tmdb.searchTvList(rankType, page, function (response) {
                rankedList.insertAll(response.results, watchedList.getList());
            });
        };

        var resultListOnClick = function (event) {
            var clicked = event.target.closest('li'),
                clickedId = clicked.getAttribute('id');

            if (watchedList.contains(clickedId)) {
                watchedList.removeOne(clickedId);
                resultList.unmark(clickedId);
                rankedList.unmark(clickedId);
                timeCounter.subMinutes(clickedId);
            }
            else {
                modal.show(clickedId);
                tempDom = clicked;
            }
        };

        /* Initializations */
        tvInput.focus();
        searchTvList('top_rated', rankedListPage);

        /* Events */
        window.addEventListener('click', function (event) {
            if (event.target === modal.getDom()) {
                modal.hide();
            }
        });

        tvInput.addEventListener('keypress', function (event) {
            var key = event.which || event.keyCode;
            if (key === 13) {
                searchTv(tvInput.value);
            }
        });

        tvInput.addEventListener('keyup', function () {
            if (tvInput.value === '') {
                toggleSearchWarning('hide');
                resultList.removeAll();
            }
        });

        searchButton.addEventListener('click', function () {
            searchTv(tvInput.value);
        });

        modal.getAddButton().addEventListener('click', function () {
            var tempDomId = tempDom.getAttribute('id');

            watchedList.insertOne(tempDom.cloneNode(true));
            resultList.mark(tempDomId);
            rankedList.mark(tempDomId);
            timeCounter.addMinutes({
                id: modal.getTvId(),
                mins: modal.getTotalMins()
            });
            modal.hide();
        });

        resultList.getDom().addEventListener('click', resultListOnClick);

        rankedList.getDom().addEventListener('click', resultListOnClick);

        rankedListAddButton.addEventListener('click', function () {
            searchTvList('top_rated', ++rankedListPage);
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

            try {
                rankedList.unmark(clickedId);
            }
            catch (err) {
                console.log(err);
            }

            watchedList.removeOne(clicked);
            timeCounter.subMinutes(clickedId);
        });
    });

})();
