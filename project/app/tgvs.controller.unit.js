'use strict';

describe('TgvsController', function() {

    var controller;
    var $scope;

    beforeEach(module('tgvs'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        controller = $controller('TgvsController', {$scope: $scope});
    }));

    it('should be defined', function () {
        expect(controller).toBeDefined();
    });

    it('should have content', function () {
        expect(controller.content).toEqual('\\o/');
    });

});
