// VENDOR LIBS
import _ from 'lodash';
import EventEmitter from 'events';

// FLUX
import dispatcher from 'flux/dispatcher';

var CHANGE_EVENT = 'change';

class DataStore extends EventEmitter {

    constructor() {
       super();
       dispatcher.registerStore(this);
       this.setMaxListeners(0);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.addListener(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    setState(newState, callback) {
        _.extend(this.state, newState);
        this.emitChange();

        if (_.isFunction(callback)) {
            callback();
        }
    }

    processCommand(command) {
        command.execute(this);
    }
}

DataStore.dispatchToken = null;

export default DataStore;
