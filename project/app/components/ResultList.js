var ResultList = (function () {
    'use strict';

    var dom;

    function init(_dom) {
        dom = _dom;
        bindUIActions();
    }

    /* Actions */
    function bindUIActions() {
        dom.addEventListener('click', function (event) {
            var selected = event.target.closest('li'),
                selectedId = selected.getAttribute('id'),
                watchedId = selectedId.split('result').pop();

            if (selected.classList.contains('gg-watched')) {
                WatchedList.removeById(watchedId);
                selected.classList.remove('gg-watched');
            }
            else {
                WatchedList.addByClone(selected.cloneNode(true));
                selected.classList.add('gg-watched');
            }
        });
    }

    /* Private */
    function newCard(tv) {
        var div = document.createElement('div'),
            poster = document.createElement('img'),
            title = document.createElement('span'),
            posterUrl = settings.TMDB_POSTER_URL + tv.poster_path;

        div.classList.add('gg-tv-card');
        poster.setAttribute('src', posterUrl);
        title.innerHTML = tv.name;

        div.appendChild(poster);
        div.appendChild(title);

        return div;
    }

    function newListItem(tv) {
        var li = document.createElement('li'),
            card = newCard(tv);

        if (WatchedList.containsById(tv.id)) {
            li.classList.add('gg-watched');
        }
        li.setAttribute('id', 'result' + tv.id);
        li.appendChild(card);

        return li;
    }

    /* Public */
    function empty() {
        if (dom.childElementCount > 0) {
            dom.innerHTML = '';
        }
    }

    function showResult(tvs) {
        empty();

        for (var i = 0; i < tvs.length; i++) {
            dom.appendChild(newListItem(tvs[i]));
        }
    }

    function unwatch(tvId) {
        var el = document.getElementById('result' + tvId);

        if (el) {
            el.classList.remove('gg-watched');
        }
    }

    return {
        init: init,
        empty: empty,
        showResult: showResult,
        unwatch: unwatch
    };

})();
