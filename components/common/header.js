// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

class Header extends React.Component {

    constructor() {
        super();
        this.constructor.contextTypes = {
            sideBarOpened: React.PropTypes.bool
        };
        this.getClass.bind(this);
    }
    render() {
        return (
            <div className={this.getClass()}>
                {this.renderTitle()}
            </div>
        );
    }

    renderTitle() {
        return <div className="header--title">PanchApp 2.0</div>;
    }

    getClass() {
        return classNames({
            'header': true,
            'header_slide': this.context.sideBarOpened
        });
    }
}

export default Header;
