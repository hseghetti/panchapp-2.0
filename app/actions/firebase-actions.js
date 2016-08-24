// CORE LIBS
import { dispatchCommand } from '../flux/app-dispatcher';

// COMMANDS
import AddCardCommand from './commands/add-card-command';

export default {

    addCard (card) {
        dispatchCommand(AddCardCommand(card));
    },

    removeCard () {
    },

    addUser () {
    },

    removeUser () {
    },

    addLog () {

    }
};
