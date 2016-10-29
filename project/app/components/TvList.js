var TvList = function function_name(listId) {
    this._dom = document.getElementById(listId);
    this._domId = listId;
    this._idList = [];
};

TvList.prototype = {
    getDom: function () {
        return this._dom;
    },

    getList: function () {
        return this._idList;
    },

    getItem: function (tvId) {
        return document.querySelector('#' + this._domId + ' #' + tvId);
    },

    contains: function (tvId) {
        return this._idList.includes(tvId);
    },

    insertAll: function (tvs, watchedIds) {
        this.removeAll();

        for (var i = 0; i < tvs.length; i++) {
            var li = ui.tvListItem(tvs[i]),
                tvId = 'tvid' + tvs[i].id;

            if (watchedIds.includes(tvId)) {
                this.mark(li);
            }

            this._idList.push(tvId);
            this._dom.appendChild(li);
        }
    },

    removeAll: function () {
        this._idList = [];
        this._dom.innerHTML = '';
    },

    insertOne: function (li) {
        this._idList.push(li.getAttribute('id'));
        this._dom.appendChild(li);
    },

    removeOne: function (tv) {
        if (typeof tv === 'string') {
            this._removeOneById(tv);
        }
        else {
            this._removeOneByDom(tv);
        }
    },

    _removeOneById: function (tvId) {
        this._removeIdFromIdList(tvId);
        this.getItem(tvId).remove();
    },

    _removeOneByDom: function (li) {
        this._removeIdFromIdList(li.getAttribute('id'));
        li.remove();
    },

    _removeIdFromIdList: function (tvId) {
        var index = this._idList.indexOf(tvId);

        if (index >= 0) {
            this._idList.splice(index, 1);
        }
    },

    mark: function (li) {
        li = typeof li === 'string' ? this.getItem(li) : li;
        li.classList.add('gg-watched');
    },

    unmark: function (li) {
        li = typeof li === 'string' ? this.getItem(li) : li;
        li.classList.remove('gg-watched');
    }
};
