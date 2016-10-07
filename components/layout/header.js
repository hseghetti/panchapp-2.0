// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

// COMMON COMPONENTS
import Button from 'components/common/button';

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
                <Button className="header-button" type='add'>
                    +
                </Button>
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
