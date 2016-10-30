'use strict';

(function () {

    w3IncludeHTML(function () {
        var tvInput = document.getElementById('tv-input'),
            searchButton = document.getElementById('search-button'),
            emptyButton = document.getElementById('empty-button'),
            timeCounter = new TimeCounter('time-counter'),
            resultList = new TvList('result-list'),
            watchedList = new TvList('watched-list'),
            modal = new Modal('tv-modal'),
            tempDom;

        var search = function (tvName) {
            tmdb.searchTv(tvName, function (response) {
                resultList.insertAll(response.results, watchedList.getList());
            });
        };

        window.addEventListener('click', function (event) {
            if (event.target === modal.getDom()) {
                modal.hide();
            }
        });

        tvInput.addEventListener('keypress', function (event) {
            var key = event.which || event.keyCode;
            if (key === 13) {
                search(tvInput.value);
            }
        });

        searchButton.addEventListener('click', function () {
            search(tvInput.value);
        });

        emptyButton.addEventListener('click', function () {
            resultList.removeAll();
        });

        modal.getAddButton().addEventListener('click', function () {
            watchedList.insertOne(tempDom.cloneNode(true));
            resultList.mark(tempDom);
            timeCounter.addMinutes({
                id: modal.getTvId(),
                mins: modal.getTotalMins()
            });
            modal.hide();
        });

        resultList.getDom().addEventListener('click', function (event) {
            var clicked = event.target.closest('li'),
                clickedId = clicked.getAttribute('id');

            if (watchedList.contains(clickedId)) {
                watchedList.removeOne(clickedId);
                resultList.unmark(clicked);
                timeCounter.subMinutes(clickedId);
            }
            else {
                modal.show(clickedId);
                tempDom = clicked;
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
            timeCounter.subMinutes(clickedId);
        });
    });

})();
