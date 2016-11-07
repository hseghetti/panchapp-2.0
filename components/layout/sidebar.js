// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

// COMMON COMPONENTS
import Toggle from 'components/layout/toggle';

class Sidebar extends React.Component {

    render() {
        var links = [
            {dir: '/cards', label: 'Cards'},
            {dir: '/users', label: 'Users'},
            {dir: '/log', label: 'Log'}
        ];

        return (
            <div className="sidebar">
                <div className={this.getClass()}>
                    {links.map(this.renderLinks)}
                </div>
                <Toggle />
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

    getClass() {
        return classNames({
            'sidebar--content': true,
            'sidebar--content_displayed': this.context.sideBarOpened
        });
    }
}

Sidebar.contextTypes = {
    sideBarOpened: React.PropTypes.bool
};

export default Sidebar;
