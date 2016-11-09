var api = (function () {
    var _encodeParams = function (params) {
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
    };

    var _onload = function (success) {
        if (this.status === 200) {
            success(JSON.parse(this.response));
        }
    };

    var get = function (config) {
        var xml = new XMLHttpRequest();

        xml.open('GET', config.url + _encodeParams(config.params));
        xml.onload = _onload.bind(xml, config.success);
        xml.send();
    };

    return {
        get: get
    };
})();
