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
        var props = this.props;
        var type = props.type;

        return classNames({
            button: true,
            'button_add': type === 'add',
            'button_pay': type === 'pay',
            'button_submit': type === 'submit'
        }, props.className);
    }
}

Button.propTypes = {value: React.PropTypes.string};

export default Button;
