import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {

    dispatchCommand(action) {
        this.dispatch({
            source: 'ACTION',
            action: action
        });
    }
}

const AppDispatcher = new AppDispatcher();

export default AppDispatcher;
