var tvList = (function () {
    'use strict';

    function addCard($list, tv, idPrefix) {
        var li = document.createElement('li'),
            card = tvCard.create(tv);

        li.setAttribute('id', idPrefix + tv.id);
        li.appendChild(card);
        $list.appendChild(li);
    }

    function addCards($resultList, tvs, idPrefix) {
        var $lastAdded, lastAddedId, query, queryId;

        $resultList.innerHTML = '';

        for (var i = 0; i < tvs.length; i++) {
            tvList.addCard($resultList, tvs[i], idPrefix);

            $lastAdded = $resultList.lastChild;
            lastAddedId = $lastAdded.getAttribute('id');
            queryId = lastAddedId.replace('result', 'watched');
            query = '#watched-list ' + '[id="' + queryId + '"]';

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
