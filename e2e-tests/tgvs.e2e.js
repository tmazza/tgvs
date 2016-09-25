'use strict';

describe('tgvs', function () {

    var el;

    beforeEach(function () {
        browser.get('');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Tempo Gasto Vendo Séries');
    });

    it('should have content', function () {
        el = browser.findElement(by.id('content'));
        expect(el.getText()).toBe('\\o/');
    });

});
