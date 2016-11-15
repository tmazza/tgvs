var settings = (function () {
    'use strict';

    var LANG = {
        DAYS: {
            CN: '天',
            EN: 'days',
            PT: 'dias'
        },
        HOURS: {
            CN: '小时',
            EN: 'hours',
            PT: 'horas'
        },
        MINUTES: {
            CN: '分钟',
            EN: 'minutes',
            PT: 'minutos'
        },
        SEARCH_BUTTON: {
            CN: '搜索',
            EN: 'SEARCH',
            PT: 'BUSCAR'
        },
        NO_RESULT_ERROR: {
            CN: '未能搜索到匹配结果 : (',
            EN: 'No result found : (',
            PT: 'Não foi encontrado nenhum resultado : ('
        },
        RANKED_LIST_TITLE: {
            CN: '排行榜',
            EN: 'Most voted in',
            PT: 'Mais votados em'
        },
        RANKED_LIST_ADD_BUTTON: {
            CN: '更多',
            EN: 'MORE',
            PT: 'MAIS'
        },
        MODAL_TEXT: {
            CN: '观看季数',
            EN: 'Number of seasons watched',
            PT: 'Número de temporadas assistidas'
        }
    }

    return {
        LANG: LANG,
        TMDB_API_KEY: 'cc520153f9a9b1a497c9a854cb7b3200',
        TMDB_SEARCH_URL: 'https://api.themoviedb.org/3/search/tv?',
        TMDB_TV_URL: 'https://api.themoviedb.org/3/tv/',
        TMDB_POSTER_URL: 'https://image.tmdb.org/t/p/w342',
        TMDB_NO_POSTER_URL: 'https://www.themoviedb.org/assets/e2dd052f141e3339' +
                            '2eb749aab2414ec0/images/no-poster-w300_and_h450_bestv2-v2.png'
    };

})();
