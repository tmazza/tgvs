'use strict';

describe('tgvs', function () {

    var el, tvInput, searchButton, resultList, watchedList;

    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.get('');

        tvInput = element(by.id('tv-name'));
        searchButton = element(by.id('search-button'));
        resultList = element(by.id('result-list'));
        watchedList = element(by.id('watched-list'));
    });

    it('title should be "Tempo Gasto Vendo Séries"', function () {
        expect(browser.getTitle()).toEqual('Tempo Gasto Vendo Séries');
    });

    it('should have an empty tv-name text input form', function () {
        expect(tvInput.isPresent()).toBeTruthy();
        expect(tvInput.getTagName()).toBe('input');
        expect(tvInput.getText()).toEqual('');
        expect(tvInput.getAttribute('type')).toEqual('text');
    });

    it('should have a search-button', function () {
        expect(searchButton.isPresent()).toBeTruthy();
        expect(searchButton.getTagName()).toBe('button');
        expect(searchButton.getText()).toEqual('SEARCH');
    });

    it('should have an empty result-list', function () {
        expect(resultList.isPresent()).toBeTruthy();
        expect(resultList.getTagName()).toBe('ul');
        expect(resultList.getAttribute('class')).toEqual('gg-tv-list');
        element.all(by.css('#result-list li')).then(function (items) {
            expect(items.length).toEqual(0);
        });
    });

    it('should have an empty watched-list', function () {
        expect(watchedList.isPresent()).toBeTruthy();
        expect(watchedList.getTagName()).toBe('ul');
        expect(watchedList.getAttribute('class')).toEqual('gg-tv-list');
        element.all(by.css('#watched-list li')).then(function (items) {
            expect(items.length).toEqual(0);
        });
    });

    describe('the journey', function () {

        it('should show impastor tv card in result-list', function () {
            el = element(by.css('#result-list #result62263'));
            tvInput.sendKeys('impastor');
            searchButton.click();
            browser.sleep(2000);

            expect(el.isPresent()).toBeTruthy();
        });

        it('the impastor tv card should not be selected', function () {
            el = element(by.id('result62263'));
            expect(el.getAttribute('class')).not.toContain('gg-watched');
        });

        it('after clicked, should be selected', function () {
            el = element(by.id('result62263'));
            el.click();
            browser.sleep(200);

            expect(el.getAttribute('class')).toContain('gg-watched');
        });

        it('should add impastor tv card to watched-list with diff. id', function () {
            el = element(by.css('#watched-list #watched62263'));
            expect(el.isPresent()).toBeTruthy();
        });

    });

});
