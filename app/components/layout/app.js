// VENDOR LIBS
var React = require('react');

// COMMON COMPONENTS
var Arrow = require('../common/arrow');
var Button = require('../common/button');
var Header = require('../common/header');

var App = React.createClass({

    render: function() {
        return (
            <div>
                <Header />
                <Arrow />
            </div>
        );
    }
});

module.exports = App;
