(function () {
    'use strict';

    angular
        .module('tgvs')
        .controller('SearchController', SearchController);

    /* @ngInject */
    function SearchController($scope) {
        var vm = this;

        activate();

        function activate() {
            $scope.$emit('IN_SEARCH');
            $scope.$on('$destroy', function () {
                $scope.$emit('LEAVE_SEARCH');
            });
        }
    }

})();
