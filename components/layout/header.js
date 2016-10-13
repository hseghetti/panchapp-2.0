// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';
import zenscroll from 'zenscroll';

// COMMON COMPONENTS
import Button from 'components/common/button';

class Header extends React.Component {

    render() {
        return (
            <div className={this.getClass()}>
                {this.renderTitle()}
                <Button {...this.getButtonProps()}>
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

    getButtonProps() {
        return {
            onClick: this.scrollPage,
            className: 'header-button',
            type: 'add'
        };
    }

    scrollPage() {
        // TODO: this should be executed as a cb when closing the add card modal
        zenscroll.toY(document.documentElement.scrollHeight);
    }
}

Header.contextTypes = {
    sideBarOpened: React.PropTypes.bool
};

export default Header;
