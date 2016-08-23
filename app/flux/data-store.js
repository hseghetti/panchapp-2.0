import EventEmitter from 'events';
import _ from 'lodash';

var CHANGE_EVENT = 'change';

class DataStore extends EventEmitter {

    constructor() {
       super();
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    setState(newState, callback) {
        _.extend({}, this.state, newstate);
        this.emitChange();

        if (_.isFunction(callback)) {
            callback();
        }
    }
}

DataStore.dispatchToken = null;

export default DataStore;
