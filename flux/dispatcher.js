class AppDispatcher {

    constructor() {
        this.stores = [];
    }

    registerStore(store) {
        this.stores.push(store);
    }

    dispatch(command) {
        if (process.env.NODE_ENV !== 'production') {
            console.log('DISPATCHING COMMAND', command);
        }

        this.stores.forEach(function (store) {
            store.processCommand(command);
        });
    }
}

const dispatcher = new AppDispatcher();

export default dispatcher;
