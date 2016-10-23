var api = (function () {
    'use strict';

    function onload(success) {
        if (this.status >= 200 || this.status < 500) {
            success(JSON.parse(this.response));
        }
    }

    /**
     * config = {
     *     {string} query,
     *     {function} success
     * }
     */
    function get(config) {
        var xml = new XMLHttpRequest(),
            request = settings.TMDB_API_URL + '?language=en-US' +
                      '&api_key=' + settings.TMDB_API_KEY +
                      '&query=' + config.query;

        xml.open('GET', request);
        xml.onload = onload.bind(xml, config.success);
        xml.send();
    }

    return {
        get: get
    };

})();
