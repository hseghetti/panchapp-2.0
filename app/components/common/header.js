var React = require('react');

var Header = React.createClass({

    render: function() {
        return (
            <div className="header">
                {this.renderTitle()}
            </div>
        );
    },

    renderTitle: function () {
        return <div className="header--title">PanchApp 2.0</div>;
    }
});

module.exports = Header;
