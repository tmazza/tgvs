var EmptyButton = (function () {
    'use strict';

    var dom;

    function init(_dom) {
        dom = _dom;
        bindUIActions();
    }

    /* Actions */
    function bindUIActions() {
        dom.addEventListener('click', function () {
            ResultList.empty();
        });
    }

    return {
        init: init
    };

})();
