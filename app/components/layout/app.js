// VENDOR LIBS
var React = require('react');
var classNames = require('classnames');

// COMMON COMPONENTS
var Arrow = require('../common/arrow');
var Button = require('../common/button');
var Header = require('../common/header');
var Sidebar = require('../common/sidebar');

var App = React.createClass({

    childContextTypes: {
        sideBarOpened: React.PropTypes.bool
    },

    getInitialState: function() {
        return {
            sideBarOpened: false
        };
    },

    getChildContext: function () {
        return {
            sideBarOpened: this.state.sideBarOpened
        };
    },

    render: function() {
        return (
            <div className="app">
                <div className={this.getContainerClass()}>
                    <Header />
                    <Arrow className="app--arrow" onClickCb={this.toggleSideBar}/>
                </div>
                <Sidebar />
            </div>
        );
    },

    getContainerClass: function () {
        return classNames({
            'app--main-content': true,
            'app--main-content_slide': this.state.sideBarOpened
        });
    },

    toggleSideBar: function () {
        this.setState({
            sideBarOpened: !this.state.sideBarOpened
        });
    }
});

module.exports = App;
