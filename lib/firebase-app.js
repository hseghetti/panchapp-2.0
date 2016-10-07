// VENDOR LIBS
import React from 'react';
import firebase from 'firebase';

// ACTIONS
import firebaseActions from 'lib/actions/firebase-actions.js';

// LIBS
import firebaseConfig from 'lib/config/firebase-config';

class FirebaseApp extends React.Component {

    constructor() {
        super();
        this.apps = [
            'cards'
        ];
        this.apps.forEach(function (app) {
            firebaseConfig.initializeApp(app);
        });
        this.state = {
            firebaseRef: firebase.database().ref()
        };
    }

    componentWillMount() {
        this.state.firebaseRef.on(
            'value',
            this.handleDone,
            this.handleError
        );
    }

    componentWillUnmount() {
        this.state.firebaseRef.off(
            'value',
            this.handleDone,
            this.handleError
        );
    }

    render() {
        return (
            <div className="firebase-app">
                {this.props.children}
            </div>
        );
    }

    handleDone(snapshot) {
        if (snapshot.exists()) {
            firebaseActions.loadCards(snapshot.val());
        }
    }

    handleError(error) {
        firebaseActions.setError(error);
    }
}

export default FirebaseApp;
