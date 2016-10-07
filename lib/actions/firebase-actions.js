// FLUX
import dispatcher from 'flux/dispatcher';

// LIBS
// import AddCardCommand from 'lib/actions/commands/add-card-command';
import LoadCardsCommand from 'lib/actions/commands/load-cards-command.js';
import SetErrorCommand from 'lib/actions/commands/set-error-command.js';

export default class Actions {

    static loadCards(cards) {
        dispatcher.dispatch(new LoadCardsCommand(cards));
    }

    setError(error) {
        dispatcher.dispatch(new SetErrorCommand(error));
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
