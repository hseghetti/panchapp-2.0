import firebaseStore from 'lib/firebase-store';

class LoadCardsCommand {

    constructor(cards) {
        this.cards = cards;
    }

    execute(dataStore) {
        if (dataStore instanceof firebaseStore) {
            dataStore.setCards(this.cards);
        }
    }
}

export default LoadCardsCommand;
