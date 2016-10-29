var Modal = function (domId) {
    this._dom = document.getElementById(domId);
    this._select = document.getElementById('seasons-watched');
    this._addButton = document.getElementById('add-button');
    this._tvId = '';
    this._seasons = {};
    this._totalSeasons = 0;
    this._totalEps = 0;
    this._epRunTime = 0;
};

Modal.prototype = {
    getDom: function () {
        return this._dom;
    },

    getTvId: function () {
        return this._tvId;
    },

    getAddButton: function () {
        return this._addButton;
    },

    getTotalMins: function () {
        var seasonsWatched = this._select.value;

        if (seasonsWatched === this._totalSeasons) {
            return this._epRunTime * this._totalEps;
        }
        else {
            var totalTime = 0;

            for (var i = 0; i < seasonsWatched; i++) {
                totalTime += this._epRunTime * this._seasons[i].episode_count;
            }

            return totalTime;
        }
    },

    _setSeasons: function () {
        if (this._seasons.length > this._totalSeasons) {
            this._seasons.shift();
        }
    },

    show: function (tvId) {
        this._dom.style.display = 'block';
        tmdb.searchTvDetails(tvId, (function (response) {
            var option;

            this._tvId = tvId;
            this._seasons = response.seasons;
            this._totalSeasons = response.number_of_seasons;
            this._totalEps = response.number_of_episodes;
            this._epRunTime = response.episode_run_time;
            this._setSeasons();

            for (var i = 0; i < this._totalSeasons; i++) {
                option = ui.newOption(i + 1);
                if (i === this._totalSeasons - 1) {
                    option.setAttribute('selected', 'selected');
                }
                this._select.appendChild(option);
            }
        }).bind(this));
    },

    hide: function () {
        this._dom.style.display = 'none';
        this._select.innerHTML = '';
    }
};
