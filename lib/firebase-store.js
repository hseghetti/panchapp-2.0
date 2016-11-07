// FLUX
import DataStore from 'flux/data-store';

let storeInstance = null;

class FirebaseStore extends DataStore {

    constructor() {
        super();
        this.state = {
            cards: [],
            error: '',
            log: {},
            users: []
        };

        if (!storeInstance) {
            storeInstance = this;
        }

        return storeInstance;
    }

    setCards(cards) {
        this.setState({cards: cards});
    }

    setUsers(users) {
        this.setState({users: users});
    }

    setError(error) {
        this.setState({error: error});
    }

    getError() {
        return this.state.error;
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
export var instance = new FirebaseStore();
