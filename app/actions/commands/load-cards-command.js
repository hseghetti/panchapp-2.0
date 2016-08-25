import FirebaseStore from '../../stores/firebase-store';

class LoadCardsCommand {

    constructor(cards) {
        this.cards = cards;
        this.fireBaseStore = new FirebaseStore();
    }

    execute(dataStore) {
        if (dataStore instanceof FirebaseStore) {
            this.fireBaseStore.setCards(this.cards);
        }
    }
}

export default LoadCardsCommand;
