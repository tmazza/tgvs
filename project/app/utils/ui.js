var ui = (function () {
    var _tvCard = function (tv) {
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

    var tvListItem = function (tv) {
        var li = document.createElement('li'),
            card = _tvCard(tv);

        li.setAttribute('id', 'tvid' + tv.id);
        li.appendChild(card);

        return li;
    }

    var newOption = function (n) {
        var option = document.createElement('option');

        option.setAttribute('value', n);
        option.innerHTML = n;

        return option;
    }

    return {
        tvListItem: tvListItem,
        newOption: newOption
    };
})();
