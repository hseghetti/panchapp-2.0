// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

class Toggle extends React.Component {

    constructor() {
        super();
        this.constructor.contextTypes = {
            sideBarOpened: React.PropTypes.bool
        };
        this.getClass.bind(this);
        this.getButtonClass.bind(this);
    }

    render() {
        return (
            <div {...this.getProps()}>
                <button {...this.getButtonProps()}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        );
    }

    getProps() {
        var props = {
            className: this.getClass()
        };

        if (!this.context.sideBarOpened) {
            props.onClick = this.props.onClickCb;
        }

        return props;
    }

    getButtonProps() {
        var props = {
            className: this.getButtonClass()
        };

        if (this.context.sideBarOpened) {
            props.onClick = this.props.onClickCb;
        }

        return props;
    }

    getClass() {
        var classes = {
            toggle: true,
            toggle_slide: this.context.sideBarOpened
        };

        classes[this.props.className] = (this.props.className);

        return classNames(classes);
    }

    getButtonClass() {
        return classNames({
            'hamburger hamburger--spin': true,
            'is-active': this.context.sideBarOpened
        });
    }
}

Toggle.propTypes = {onClickCb: React.PropTypes.func.isRequired};

export default Toggle;
