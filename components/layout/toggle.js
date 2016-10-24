// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

class Toggle extends React.Component {

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
        return {
            className: this.getClass(),
            onClick: this.context.toggleSideBar
        };
    }

    getButtonProps() {
        return {
            className: this.getButtonClass(),
            onClick: this.context.toggleSideBar
        };
    }

    getClass() {
        return classNames({
            toggle: true,
            toggle_slide: this.context.sideBarOpened
        }, this.props.className);
    }

    getButtonClass() {
        return classNames({
            'hamburger hamburger--spin': true,
            'is-active': this.context.sideBarOpened
        });
    }
}

Toggle.contextTypes = {
    sideBarOpened: React.PropTypes.bool,
    toggleSideBar: React.PropTypes.func.isRequired
};

export default Toggle;
