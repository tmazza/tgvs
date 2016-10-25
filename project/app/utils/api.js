var api = (function () {
    'use strict';

    function encodeParams(params) {
        var encodedSring = '';

        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                if (encodedSring.length > 0) {
                    encodedSring += '&';
                }
                encodedSring += encodeURI(key + '=' + params[key]);
            }
        }

        return encodedSring;
    }

    function onload(success) {
        if (this.status === 200) {
            success(JSON.parse(this.response));
        }
    }

    /**
     * {object} config:
     *     {string} url
     *     {object} params
     *     {function} success
     */
    function get(config) {
        var xml = new XMLHttpRequest();

        xml.open('GET', config.url + encodeParams(config.params));
        xml.onload = onload.bind(xml, config.success);
        xml.send();
    }

    return {
        get: get
    };

})();
