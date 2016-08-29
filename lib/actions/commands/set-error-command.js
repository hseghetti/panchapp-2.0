// LIBS
import FirebaseStore from 'lib/firebase-store';

class SetErrorCommand {

    constructor(error) {
        this.error = error;
        this.fireBaseStore = new FirebaseStore();
    }

    execute(dataStore) {
        if (dataStore instanceof FirebaseStore) {
            this.fireBaseStore.setError(this.error);
        }
    }
}

export default SetErrorCommand;
