var React = require('react');

var Button = React.createClass({

    propTypes: {
        value: React.PropTypes.string
    },

    render: function() {
        return (
            <div>
                <button>
                    {this.props.value || 'Boton'}
                </button>
            </div>

        );
    }

});

module.exports = Button;
