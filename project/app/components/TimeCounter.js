var TimeCounter = function (domId) {
    this._dom = document.getElementById(domId);
    this._time = 0;
    this._tvInfos = {};
};

TimeCounter.prototype = {
    addMinutes: function (tv) {
        this._time += tv.mins;
        this._tvInfos[tv.id] = tv.mins;
        this._updateView();
    },

    subMinutes: function (tvId) {
        this._time -= this._tvInfos[tvId];
        delete this._tvInfos[tvId];
        this._updateView();
    },

    _updateView: function () {
        this._dom.innerHTML = this._time;
    }
};
