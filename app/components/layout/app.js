// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

// COMMON COMPONENTS
import Arrow from '../common/arrow';
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
                    <Arrow className="app--arrow" onClickCb={this.toggleSideBar.bind(this)}/>
                    {this.props.children}
                </div>
                <Sidebar />
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
