var tvList = (function () {
    'use strict';

    function addCard($list, tv) {
        var li = document.createElement('li'),
            card = tvCard.create(tv);

        li.setAttribute('id', tv.id);
        li.appendChild(card);
        $list.appendChild(li);
    }

    function addCards($resultList, tvs) {
        var $lastAdded, lastAddedId, query;

        $resultList.innerHTML = '';

        for (var i = 0; i < tvs.length; i++) {
            tvList.addCard($resultList, tvs[i]);

            $lastAdded = $resultList.lastChild;
            lastAddedId = $lastAdded.getAttribute('id');
            query = '#watched-list ' + '[id="' + lastAddedId + '"]';

            if (document.querySelector(query)) {
                $lastAdded.classList.add('gg-watched');
            }
        }
    }

    function empty($list) {
        if ($list.childElementCount > 0) {
            $list.innerHTML = '';
        }
    }

    return {
        addCard: addCard,
        addCards: addCards,
        empty: empty
    };

})();
