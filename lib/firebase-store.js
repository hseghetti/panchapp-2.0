// FLUX
import DataStore from 'flux/data-store';

let instance = null;

class FirebaseStore extends DataStore {

    constructor() {
        super();
        this.state = {
            cards: {},
            log: {},
            users: {},
            error: ''
        };

        if (!instance) {
            instance = this;
        }

        return instance;
    }

    setCards(cards) {
        this.setState({cards: cards});
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
