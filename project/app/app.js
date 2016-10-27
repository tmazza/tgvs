(function () {
    'use strict';

    w3IncludeHTML(function () {

        SearchButton.init(document.getElementById('search-button'));
        EmptyButton.init(document.getElementById('empty-button'));
        ResultList.init(document.getElementById('result-list'));
        WatchedList.init(document.getElementById('watched-list'));

    });

})();
