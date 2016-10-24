// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {

    render() {
        return (
            <button {...this.props} {...this.getProps()}>
                {this.props.children}
            </button>
        );
    }

    getProps () {
        return {
            className: this.getClass()
        };
    }

    getClass() {
        return classNames({
            button: true,
            'button_add': this.props.type === 'add',
            'button_pay': this.props.type === 'pay'
        }, this.props.className);
    }
}

Button.propTypes = {value: React.PropTypes.string};

export default Button;
