// VENDOR LIBS
var React = require('react');

// COMMON COMPONENTS
var Button = require('../common/button');

var App = React.createClass({

    render: function() {
        return (
            //ACA VA LA APP
            <div>
                VAMO A CALMARNO
                <Button value="Botonson"/>
            </div>
        );
    }
});

module.exports = App;
