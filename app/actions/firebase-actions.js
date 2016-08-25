// CORE LIBS
import dispatcher from '../flux/dispatcher';

// COMMANDS
// import AddCardCommand from './commands/add-card-command';
import LoadCardsCommand from './commands/load-cards-command';

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
