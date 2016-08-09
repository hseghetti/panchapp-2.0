// VENDOR LIBS
var React = require('react');
var classNames = require('classnames');

var Arrow = React.createClass({

    getInitialState: function() {
        return {
            drawerOpen: true
        };
    },

    render: function() {
        return <div className={this.getClass()} onClick={this.handleArrowClick}/>;
    },

    getClass: function () {
        return classNames({
            arrow: true,
            arrow_left: this.state.drawerOpen,
            arrow_right: !this.state.drawerOpen
        });
    },

    handleArrowClick: function () {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        });
    }

});

module.exports = Arrow;
