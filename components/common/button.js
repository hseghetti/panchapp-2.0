// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {

    render() {
        return (
            <button className={this.getClass()}>
                {this.props.children}
            </button>
        );
    }

    getClass() {
        var classes = {
            button: true,
            'button_add': this.props.type === 'add',
            'button_pay': this.props.type === 'pay'
        };

        classes[this.props.className] = (this.props.className);

        return classNames(classes);
    }
}

Button.propTypes = {value: React.PropTypes.string};

export default Button;
