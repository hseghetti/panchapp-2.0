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
    }

    componentDidMount() {
        var ref = firebase.database().ref();

        ref.on('value', function(snapshot) {
            this.loadCards(snapshot);
        }, function (error) {
            firebaseActions.setError(error);
        }, this);
    }

    render() {
        return (
            <div className="firebase-app">
                {this.props.children}
            </div>
        );
    }

    loadCards(snapshot) {
        if (snapshot.exists()) {
            firebaseActions.loadCards(snapshot.val());
        }
    }
}

export default FirebaseApp;
