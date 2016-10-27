'use strict';

var pageObject = function () {
    /* CSS classes */
    this.ggWatched = 'gg-watched';
    this.ggTvList = 'gg-tv-list';

    /* Elements */
    this.searchInput = element(by.id('tv-name'));
    this.searchButton = element(by.id('search-button'));

    this.resultList = element(by.id('result-list'));
    this.resultListItems = this.resultList.all(by.css('li'));

    this.watchedList = element(by.id('watched-list'));
    this.watchedListItems = this.watchedList.all(by.css('li'));

    this.tvResult1 = element(by.css('#result-list #result62263'));
    this.tvWatched1 = element(by.css('#watched-list #watched62263'));
    this.tvResult2 = element(by.css('#result-list #result60735'));
    this.tvWatched2 = element(by.css('#watched-list #watched60735'));

    /* Actions */
    this.search = function (name) {
        this.searchInput.clear();
        this.searchInput.sendKeys(name);
        this.searchButton.click();
        browser.sleep(1000);
    }

    this.clickOnCard = function (card) {
        card.click();
        browser.sleep(50);
    }
}

describe('tgvs', function () {

    var po = new pageObject();

    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.get('');
    });

    describe('on landing', function () {

        it('s title should be "Tempo Gasto Vendo Séries"', function () {
            expect(browser.getTitle()).toEqual('Tempo Gasto Vendo Séries');
        });

        it('should have an empty search input form', function () {
            expect(po.searchInput.isPresent()).toBeTruthy();
            expect(po.searchInput.getTagName()).toBe('input');
            expect(po.searchInput.getText()).toEqual('');
            expect(po.searchInput.getAttribute('type')).toEqual('text');
        });

        it('should have a search-button', function () {
            expect(po.searchButton.isPresent()).toBeTruthy();
            expect(po.searchButton.getTagName()).toBe('button');
            expect(po.searchButton.getText()).toEqual('SEARCH');
        });

        it('should have an empty result-list', function () {
            expect(po.resultList.isPresent()).toBeTruthy();
            expect(po.resultList.getTagName()).toBe('ul');
            expect(po.resultList.getAttribute('class')).toContain(po.ggTvList);
            expect(po.resultListItems.count()).toEqual(0);
        });

        it('should have an empty watched-list', function () {
            expect(po.watchedList.isPresent()).toBeTruthy();
            expect(po.watchedList.getTagName()).toBe('ul');
            expect(po.watchedList.getAttribute('class')).toContain(po.ggTvList);
            expect(po.watchedListItems.count()).toEqual(0);
        });

    });

    describe('search for a show', function () {

        beforeAll(function () {
            po.search('impastor');
        });

        it('should contain the result', function () {
            expect(po.tvResult1.isPresent()).toBeTruthy();
        });

        it('s result should not be selected', function () {
            expect(po.tvResult1.getAttribute('class')).not.toContain(po.ggWatched);
        });

    });

    describe('add the show', function () {

        beforeAll(function () {
            po.clickOnCard(po.tvResult1);
        });

        it('s result should be selected after being clicked', function () {
            expect(po.tvResult1.getAttribute('class')).toContain(po.ggWatched);
        });

        it('should contain the selected show in watched-list', function () {
            expect(po.tvWatched1.isPresent()).toBeTruthy();
        });

    });

    describe('search for another show', function () {

        beforeAll(function () {
            po.search('the flash');
        });

        it('should not contain the old result', function () {
            expect(po.tvResult1.isPresent()).not.toBeTruthy();
        });

        it('should contain the new result', function () {
            expect(po.tvResult2.isPresent()).toBeTruthy();
        });

        it('s result should not be selected', function () {
            expect(po.tvResult2.getAttribute('class')).not.toContain(po.ggWatched);
        });

    });

    describe('add the show', function () {

        beforeAll(function () {
            po.clickOnCard(po.tvResult2);
        });

        it('s result should be selected after being clicked', function () {
            expect(po.tvResult2.getAttribute('class')).toContain(po.ggWatched);
        });

        it('should contain the selected show in watched-list', function () {
            expect(po.tvWatched2.isPresent()).toBeTruthy();
        });

        it('should still contain the old one in watched-list', function () {
            expect(po.tvWatched1.isPresent()).toBeTruthy();
        });

    });

    describe('remove second tv show by clicking at result-list', function () {

        beforeAll(function () {
            po.clickOnCard(po.tvResult2);
        });

        it('s result should not be selected', function () {
            expect(po.tvResult2.getAttribute('class')).not.toContain(po.ggWatched);
        });

        it('should be removed', function () {
            expect(po.tvWatched2.isPresent()).not.toBeTruthy();
        });

    });

    describe('search for watched show', function () {

        beforeAll(function () {
            po.search('impastor');
        });

        it('s result should be selected', function () {
            expect(po.tvResult1.getAttribute('class')).toContain(po.ggWatched);
        });

    });

    describe('remove it by clicking at watched-list', function () {

        beforeAll(function () {
            po.clickOnCard(po.tvWatched1);
        });

        it('should be removed', function () {
            expect(po.tvWatched1.isPresent()).not.toBeTruthy();
        });

        it('s result in result-list should not be selected', function () {
            expect(po.tvResult1.getAttribute('class')).not.toContain(po.ggWatched);
        });

    });

});
