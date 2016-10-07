// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

// LIBS
import FirebaseApp from 'lib/firebase-app';

// COMMON COMPONENTS
import Header from 'components/layout/header';
import Sidebar from 'components/layout/sidebar';

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
                <FirebaseApp>
                    {this.props.children}
                </FirebaseApp>
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
