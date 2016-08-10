// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

class Arrow extends React.Component {

    constructor() {
        super();
        this.constructor.contextTypes = {
            sideBarOpened: React.PropTypes.bool
        }
        this.getClass.bind(this);
    }

    render() {
        return <div className={this.getClass()} onClick={this.props.onClickCb} />;
    }

    getClass() {
        var classes = {
            arrow: true,
            arrow_left: this.context.sideBarOpened,
            arrow_right: !this.context.sideBarOpened
        };

        classes[this.props.className] = (this.props.className);

        return classNames(classes);
    }
}

export default Arrow;
