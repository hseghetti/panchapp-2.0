// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

class Sidebar extends React.Component {

    constructor() {
        super();
        this.constructor.contextTypes = {
            sideBarOpened: React.PropTypes.bool
        };
        this.getClass.bind(this);
    }

    render() {
        var links = [
            {dir: '/cards', label: 'Cards'},
            {dir: '/users', label: 'Users'},
            {dir: '/log', label: 'Log'}
        ];

        return (
            <div className={this.getClass()}>
                {links.map(this.renderLinks)}
            </div>
        );
    }

    renderLinks(link, index) {
        var props = {
            activeClassName: 'sidebar--link-active',
            className: 'sidebar--link',
            key: index,
            to: link.dir
        };

        return (
            <Link {...props}>
                <span className="sidebar--link-text">{link.label}</span>
            </Link>
        );
    }

    getClass () {
        return classNames({
            sidebar: true,
            sidebar_displayed: this.context.sideBarOpened
        });
    }
}

export default Sidebar;
