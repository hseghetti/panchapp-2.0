import firebaseStore from 'lib/firebase-store';

class LoadUsersCommand {

    constructor(users) {
        this.users = users;
    }

    execute(dataStore) {
        if (dataStore instanceof firebaseStore) {
            dataStore.setUsers(this.users);
        }
    }
}

export default LoadUsersCommand;
