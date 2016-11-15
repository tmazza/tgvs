var TimeCounter = function (domId) {
    this._dom = document.getElementById(domId);
    this._mins = document.querySelector('#' + domId + ' #mins');
    this._hours = document.querySelector('#' + domId + ' #hours');
    this._days = document.querySelector('#' + domId + ' #days');
    this._minsText = document.querySelector('#' + domId + ' #mins-text');
    this._hoursText = document.querySelector('#' + domId + ' #hours-text');
    this._daysText = document.querySelector('#' + domId + ' #days-text');
    this._totalMins = 0;
    this._tvInfos = {};
};

TimeCounter.prototype = {
    renderText: function (lang) {
        this._minsText.textContent = settings.LANG.MINUTES[lang];
        this._hoursText.textContent = settings.LANG.HOURS[lang];
        this._daysText.textContent = settings.LANG.DAYS[lang];
    },

    addMinutes: function (tv) {
        this._totalMins += tv.mins;
        this._tvInfos[tv.id] = tv.mins;
        this._updateView();
    },

    subMinutes: function (tvId) {
        this._totalMins -= this._tvInfos[tvId];
        delete this._tvInfos[tvId];
        this._updateView();
    },

    _formatTime: function () {
        var time = {};
        time.mins = this._totalMins % 60;
        time.hours = Math.floor(this._totalMins / 60);
        time.days = Math.floor(time.hours / 24);
        time.hours %= 24;
        return time;
    },

    _updateView: function () {
        var time = this._formatTime();
        this._mins.textContent = time.mins;
        this._hours.textContent = time.hours;
        this._days.textContent = time.days;
    }
};
