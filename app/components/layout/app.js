// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';
import firebase from 'firebase';

import firebaseActions from '../../actions/firebase-actions.js';

// COMMON COMPONENTS
import Header from '../common/header';
import Sidebar from '../common/sidebar';

class App extends React.Component {

    constructor() {
        super();
        this.constructor.childContextTypes = {
            sideBarOpened: React.PropTypes.bool
        };
        this.getChildContext.bind(this);
        this.getContainerClass.bind(this);
        this.state = {
            sideBarOpened: false
        };

        this.intializeFirebase();
    }

    getChildContext() {
        return {
            sideBarOpened: this.state.sideBarOpened
        };
    }

    render() {
        return (
            <div className="app">
                <div className={this.getContainerClass()}>
                    <Header />
                    {this.props.children}
                </div>
                <Sidebar onClickCb={this.toggleSideBar.bind(this)} />
            </div>
        );
    }

    getContainerClass() {
        return classNames({
            'app--main-content': true,
            'app--main-content_slide': this.state.sideBarOpened
        });
    }

    toggleSideBar() {
        this.setState({
            sideBarOpened: !this.state.sideBarOpened
        });
    }

    intializeFirebase() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAXYjuZzrvC0vtgpWEL1qKHv6BR7La1fZ0',
            authDomain: 'papp-cards.firebaseapp.com',
            databaseURL: 'https://mutombo-cards.firebaseio.com/',
            storageBucket: 'papp-cards.appspot.com'
        });

        firebase.database().ref().on('value', function(snapshot) {
            if (snapshot.val()) {
                firebaseActions.loadCards(snapshot.val());
            }
        }.bind(this));
    }
}

export default App;
