
(function () {
    'use strict';

    angular
        .module('tgvs')
        .constant('DEFAULT_EP_RUN_TIME', 45)
        .constant('TMDB_LAN', 'en-US')
        .constant('TMDB_API_KEY', 'cc520153f9a9b1a497c9a854cb7b3200')
        .constant('TMDB_API_URL', 'https://api.themoviedb.org/3')
        .constant('TMDB_POSTER_URL', 'https://image.tmdb.org/t/p/w342')
        .constant('TMDB_DEFAULT_POSTER_URL',
                  'https://www.themoviedb.org/assets/e2dd052f141e3339' +
                  '2eb749aab2414ec0/images/no-poster-w300_and_h450_bestv2-v2.png');

})();
