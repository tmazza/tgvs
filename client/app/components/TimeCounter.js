var TimeCounter = function (domId) {
    this._dom = document.getElementById(domId);
    this._mins = document.querySelector('#' + domId + ' #mins');
    this._hours = document.querySelector('#' + domId + ' #hours');
    this._days = document.querySelector('#' + domId + ' #days');
    this._totalMins = 0;
    this._tvInfos = {};
};

TimeCounter.prototype = {
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
        this._mins.innerHTML = time.mins;
        this._hours.innerHTML = time.hours;
        this._days.innerHTML = time.days;
    }
};
