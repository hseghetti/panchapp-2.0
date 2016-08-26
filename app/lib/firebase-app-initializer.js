// VENDOR LIBS
import React from 'react';

// LIBS
import firebaseConfig from 'lib/config/firebase-config';

class FirebaseMixin extends React.Component {
    constructor() {
        super();
        this.apps = [
            'cards'
        ];

        this.apps.forEach(function (app) {
            firebaseConfig.initializeApp(app);
        });
    }

    render() {
        return (
            <div className="firebase-mixin">
                {this.props.children}
            </div>
        );
    }
}

export default FirebaseMixin;
