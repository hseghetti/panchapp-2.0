// LIBS
import firebaseStore from 'lib/firebase-store';

class SetErrorCommand {

    constructor(error) {
        this.error = error;
    }

    execute(dataStore) {
        if (dataStore instanceof firebaseStore) {
            dataStore.setError(this.error);
        }
    }
}

export default SetErrorCommand;
