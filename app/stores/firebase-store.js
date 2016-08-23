import DataStore from '../flux/data-store';

let instance = null;

class FirebaseStore extends DataStore {

    constructor() {
        super();
        this.state = {
            cards: {},
            log: {},
            users: {}
        };

        if (!instance) {
            instance = this;
        }

        return instance;
    }

    getCards() {
        return this.state.cards;
    }

    getLog() {
        return this.state.log;
    }

    getUsers() {
        return this.state.users;
    }
}

export default FirebaseStore;
