(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('SearchController', SearchController);

    /* @ngInject */
    function SearchController($scope, tabs) {
        var vm = this;

        activate();

        function activate() {
            $scope.$on('$destroy', deactivateTab);
        }

        function deactivateTab() {
            tabs.deactivate('search');
        }
    }

})();
