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
            var totalMins = 0;
            for (var i = 0; i < seasonsWatched; i++) {
                totalMins += this._epRunTime * this._seasons[i].episode_count;
            }
            return totalMins;
        }
    },

    _setPropsFromResponse: function (response) {
        this._totalSeasons = response.number_of_seasons;
        this._totalEps = response.number_of_episodes;
        this._epRunTime = Math.max.apply(null, response.episode_run_time);
        this._setSeasons(response.seasons);
    },

    _setSeasons: function (seasons) {
        if (seasons.length > this._totalSeasons) {
            seasons.shift();
        }
        this._seasons = seasons;
    },

    show: function (tvId) {
        this._dom.style.display = 'block';
        tmdb.searchTvDetails(tvId, (function (response) {
            var option;

            this._tvId = tvId;
            this._setPropsFromResponse(response);

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
