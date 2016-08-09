// VENDOR LIBS
var React = require('react');
var classNames = require('classnames');

var Arrow = React.createClass({

    contextTypes: {
        sideBarOpened: React.PropTypes.bool
    },

    render: function() {
        return <div className={this.getClass()} onClick={this.props.onClickCb} />;
    },

    getClass: function () {
        var classes = {
            arrow: true,
            arrow_left: this.context.sideBarOpened,
            arrow_right: !this.context.sideBarOpened
        };

        classes[this.props.className] = (this.props.className);

        return classNames(classes);
    }
});

module.exports = Arrow;
