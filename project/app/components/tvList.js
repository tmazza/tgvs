var tvList = (function () {
    'use strict';

    function add(list, tv) {
        var li = document.createElement('li'),
            card = tvCard.create(tv);

        li.setAttribute('id', tv.id);
        li.appendChild(card);
        list.appendChild(li);
    }

    function remove(list, tvId) {
        // TODO
    }

    function empty(list) {
        if (list.childElementCount > 0) {
            list.innerHTML = '';
        }
    }

    return {
        add: add,
        remove: remove,
        empty: empty
    };

})();
