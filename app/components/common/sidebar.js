// VENDOR LIBS
var React = require('react');
var classNames = require('classnames');

var Sidebar = React.createClass({

    contextTypes: {
        sideBarOpened: React.PropTypes.bool
    },

    render: function() {
        return (
            <div className={this.getClass()} />
        );
    },

    getClass: function () {
        return classNames({
            sidebar: true,
            sidebar_displayed: this.context.sideBarOpened
        });
    }
});

module.exports = Sidebar;
