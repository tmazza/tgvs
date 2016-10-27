var WatchedList = (function () {
    'use strict';

    var dom;

    function init(_dom) {
        dom = _dom;
        bindUIActions();
    }

    /* Actions */
    function bindUIActions() {
        dom.addEventListener('click', function (event) {
            var selected = event.target.closest('li'),
                selectedId = selected.getAttribute('id');

            ResultList.unwatch(selectedId.split('watched').pop());
            selected.remove();
        });
    }

    /* Public */
    function addByClone(li) {
        var newId = li.getAttribute('id').replace('result', 'watched');

        li.setAttribute('id', newId);
        dom.appendChild(li);
    }

    function containsById(tvId) {
        return document.getElementById('watched' + tvId) ? true : false;
    }

    function removeById(tvId) {
        document.getElementById('watched' + tvId).remove();
    }

    return {
        init: init,
        addByClone: addByClone,
        containsById: containsById,
        removeById: removeById
    };

})();
