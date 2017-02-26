(function () {
    'use strict';

    angular
        .module('tgvs')
        .factory('tabs', tabs);

    function tabs() {
        var service = {
            data: {
                topRated: false,
                search: false,
                myList: false
            },
            activate: activate,
            deactivate: deactivate
        };
        return service;

        function activate(tab) {
            service.data[tab] = true;
        }

        function deactivate(tab) {
            service.data[tab] = false;
        }
    }

})();
