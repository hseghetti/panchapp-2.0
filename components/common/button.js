// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {

    render() {
        return (
            <button className={this.getClass()}>
                {this.getValue()}
            </button>
        );
    }

    getClass() {
        return classNames({
            button: true,
            'button_add': this.props.type === 'add'
        });
    }

    getValue() {
        var valueTypes = {
            add: '+'
        };

        return valueTypes[this.props.type];
    }
}

Button.propTypes = {value: React.PropTypes.string};

export default Button;
