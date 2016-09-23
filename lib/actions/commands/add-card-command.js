// LIBS
import firebaseStore from 'lib/firebase-store';

class AddCardCommand {

    constructor(card) {
        this.card = card;
    }

    execute(dataStore) {
        if (dataStore instanceof firebaseStore) {
            dataStore.addCard(this.card);
        }
    }
}

export default AddCardCommand;
