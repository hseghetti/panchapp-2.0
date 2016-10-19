// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

// LIBS
import FirebaseApp from 'lib/firebase-app';

// COMMON COMPONENTS
import Header from 'components/layout/header';
import Sidebar from 'components/layout/sidebar';
import ModalPortal from 'components/layout/modal-portal';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            modalPortalDisplayed: false,
            sideBarOpened: false
        };
    }

    getChildContext() {
        return {
            sideBarOpened: this.state.sideBarOpened,
            toggleSideBar: this.toggleSideBar.bind(this)
        };
    }

    render() {
        return (
            <div className="app">
                <ModalPortal>
                    <Header />
                        <div className={this.getContainerClass()}>
                            <FirebaseApp>
                                {this.props.children}
                            </FirebaseApp>
                        </div>
                    <Sidebar />
                </ModalPortal>
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

App.childContextTypes = {
    sideBarOpened: React.PropTypes.bool,
    toggleSideBar: React.PropTypes.func
};

export default App;
