// LIBS
import FirebaseStore from 'lib/firebase-store';

class AddCardCommand {

    constructor(card) {
        this.card = card;
        this.fireBaseStore = new FirebaseStore();
    }

    execute(dataStore) {
        if (dataStore instanceof FirebaseStore) {
            this.fireBaseStore.addCard(this.card);
        }
    }
}

export default AddCardCommand;
