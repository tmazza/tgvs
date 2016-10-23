var api = (function () {
    'use strict';

    function encodeParams(params) {
        // TODO
    }

    function onload(success) {
        if (this.status >= 200 || this.status < 500) {
            success(JSON.parse(this.response));
        }
    }

    /**
     * config = {
     *     {string} url,
     *     {function} success
     * }
     */
    function get(config) {
        var xml = new XMLHttpRequest();

        xml.open('GET', config.url);
        xml.onload = onload.bind(xml, config.success);
        xml.send();
    }

    return {
        get: get
    };

})();
