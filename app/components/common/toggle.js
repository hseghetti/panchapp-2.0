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
            <div className={this.getClass()}>
                <button onClick={this.props.onClickCb} className={this.getButtonClass()}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        );
    }

    getClass() {
        var classes = {
            toggle: true,
            toggle_slide: this.context.sideBarOpened
        };

        classes[this.props.className] = (this.props.className);

        return classNames(classes);
    }

    getButtonClass () {
        return classNames({
            'hamburger hamburger--spin': true,
            'is-active': this.context.sideBarOpened
        });
    }
}

export default Toggle;
