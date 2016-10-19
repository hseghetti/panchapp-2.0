// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';
import zenscroll from 'zenscroll';

// COMMON COMPONENTS
import Button from 'components/common/button';
import Modal from 'components/layout/modal';

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
            onClick: this.openAddCardModal.bind(this),
            className: 'header-button',
            type: 'add'
        };
    }

    openAddCardModal() {
        this.context.toggleModalPortal(
            <Modal type="add-card" />,
            this.scrollPage
        );
    }

    scrollPage() {
        // TODO: maybe scroll to the card when added using actions?
        zenscroll.toY(document.documentElement.scrollHeight);
    }
}

Header.contextTypes = {
    sideBarOpened: React.PropTypes.bool,
    toggleModalPortal: React.PropTypes.func
};

export default Header;
