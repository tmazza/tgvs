var states = (function () {
    'use strict';

    var states = {
        watchedList: []
    };

    function getWatchedList() {
        return states.watchedList;
    }

    function addTo(list, value) {
        states[list].push(value);
    }

    function removeFrom(list, value) {
        var index = states[list].indexOf(value);

        if (index >= 0) {
            states[list].splice(index, 1);
        }
    }

    return {
        getWatchedList: getWatchedList,
        addTo: addTo,
        removeFrom: removeFrom
    };

})();
