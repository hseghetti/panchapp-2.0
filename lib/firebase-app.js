// VENDOR LIBS
import React from 'react';

// ACTIONS
import firebaseActions from 'lib/actions/firebase-actions.js';

// LIBS
import firebaseConfig from 'lib/config/firebase-config';

class FirebaseApp extends React.Component {

    constructor() {
        var appRef;
        var firebaseRefs = {};
        var initialState = {};

        super();
        this.apps = [
            {
                appName: 'cards',
                appConfig: {}
            },
            {
                appName: 'users',
                appConfig: {}
            }
        ];
        this.apps.forEach(function (app, index) {
            appRef = (!index) ? undefined : app.appName;
            initialState[app.appName + 'FirebaseRef'] =
                firebaseConfig.initializeApp(app.appName, appRef).database().ref();
            firebaseRefs[app.appName] = initialState[app.appName + 'FirebaseRef'];
        });
        this.state = initialState;
        this.firebaseRefs = firebaseRefs;
    }

    getChildContext() {
        return {
            firebaseRefs: this.firebaseRefs
        };
    }

    componentWillMount() {
        this.addFirebaseListeners();
    }

    componentWillUnmount() {
        this.removeFirebaseListeners();
    }

    render() {
        return (
            <div className="firebase-app">
                {this.props.children}
            </div>
        );
    }

    addFirebaseListeners() {
        this.apps.forEach(function (app) {
            this.state[app.appName + 'FirebaseRef'].on(
                'value',
                this.handleDone.bind(this, app.appName),
                this.handleError
            );
        }, this);
    }

    removeFirebaseListeners() {
        this.apps.forEach(function (app) {
            this.state[app.appName + 'FirebaseRef'].off(
                'value',
                this.handleDone.bind(this, app.appName),
                this.handleError
            );
        }, this);
    }

    handleDone(appName, snapshot) {
        var appTypes = {
            'cards': firebaseActions.loadCards,
            'users': firebaseActions.loadUsers
        };

        if (snapshot.exists()) {
            appTypes[appName](snapshot.val());
        }
    }

    handleError(error) {
        firebaseActions.setError(error);
    }
}

FirebaseApp.childContextTypes = {
    firebaseRefs: React.PropTypes.object
};

export default FirebaseApp;
