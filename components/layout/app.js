// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';
import firebase from 'firebase';

// LIBS
import firebaseActions from 'lib/actions/firebase-actions.js';
import FirebaseAppInitializer from 'lib/firebase-app-initializer';

// COMMON COMPONENTS
import Header from 'components/common/header';
import Sidebar from 'components/common/sidebar';

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
    }

    componentDidMount() {
        firebase.database().ref().on('value', function(snapshot) {
            if (snapshot.val()) {
                firebaseActions.loadCards(snapshot.val());
            }
        }.bind(this));
    }

    getChildContext() {
        return {
            sideBarOpened: this.state.sideBarOpened
        };
    }

    render() {
        return (
            <div className="app">
                <Header />
                {this.renderContent()}
                <Sidebar onClickCb={this.toggleSideBar.bind(this)} />
            </div>
        );
    }

    renderContent() {
        return (
            <div className={this.getContainerClass()}>
                <FirebaseAppInitializer>
                    {this.props.children}
                </FirebaseAppInitializer>
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
}

export default App;
