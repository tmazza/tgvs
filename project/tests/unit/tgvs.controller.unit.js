'use strict';

describe('TgvsController', function() {

    var controller;
    var $scope;

    beforeEach(function () {
        module('tgvs');

        inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            controller = $controller('TgvsController', {$scope: $scope});
        });
    });

    it('should exists', function () {
        expect(controller).toBeDefined();
    });

    it('should have content', function () {
        expect(controller.content).toEqual('\\o/');
    });

});
