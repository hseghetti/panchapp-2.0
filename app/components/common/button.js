import React from 'react';

class Button extends React.Component {

    render() {
        return (
            <div>
                <button>
                    {this.props.value || 'Boton'}
                </button>
            </div>
        );
    }
}

Button.propTypes = {value: React.PropTypes.string};

export default Button;
