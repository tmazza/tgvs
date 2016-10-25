var tvCard = (function () {
    'use strict';

    function create(tv) {
        var $card = document.createElement('div'),
            $poster = document.createElement('img'),
            $title = document.createElement('span'),

            posterUrl = 'https://image.tmdb.org/t/p/w342' + tv.poster_path;

        $card.classList.add('gg-tv-card');
        $poster.setAttribute('src', posterUrl);
        $title.innerHTML = tv.name;

        $card.appendChild($poster);
        $card.appendChild($title);

        return $card;
    }

    return {
        create: create
    };

})();
