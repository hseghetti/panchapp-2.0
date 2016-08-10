// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

class Sidebar extends React.Component {

    constructor() {
        super();
        this.constructor.contextTypes = {
            sideBarOpened: React.PropTypes.bool
        };
        this.getClass.bind(this);
    }

    render() {
        return <div className={this.getClass()} />;
    }

    getClass () {
        return classNames({
            sidebar: true,
            sidebar_displayed: this.context.sideBarOpened
        });
    }
}

export default Sidebar;
