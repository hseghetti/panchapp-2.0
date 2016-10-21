// FLUX
import dispatcher from 'flux/dispatcher';

// LIBS
// import AddCardCommand from 'lib/actions/commands/add-card-command';
import LoadCardsCommand from 'lib/actions/commands/load-cards-command';
import LoadUsersCommand from 'lib/actions/commands/load-users-command';
import SetErrorCommand from 'lib/actions/commands/set-error-command';

export default class Actions {

    static loadCards(cards) {
        dispatcher.dispatch(new LoadCardsCommand(cards));
    }

    static loadUsers(users) {
        dispatcher.dispatch(new LoadUsersCommand(users));
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
