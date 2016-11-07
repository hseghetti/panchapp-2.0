// VENDOR
import _ from 'lodash';

// LIBS
import firebaseStore from 'lib/firebase-store';

class LoadLogsCommand {

    constructor(logs) {
        this.logs = logs;
    }

    execute(dataStore) {
        var values;

        if (dataStore instanceof firebaseStore) {
            values = _.values(this.logs);
            dataStore.setLogs(_.reverse(values, 'date'));
        }
    }
}

export default LoadLogsCommand;
