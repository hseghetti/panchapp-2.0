// FLUX
import dispatcher from 'flux/dispatcher';

// LIBS
// import AddCardCommand from 'lib/actions/commands/add-card-command';
import LoadCardsCommand from 'lib/actions/commands/load-cards-command.js';

export default class Actions {

    static loadCards(cards) {
        dispatcher.dispatch(new LoadCardsCommand(cards));
    }

    addCard() {
    }

    removeCard() {
    }

    addUser() {
    }

    removeUser() {
    }

    addLog() {
    }
};
