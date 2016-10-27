// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';
import zenscroll from 'zenscroll';

// COMMON COMPONENTS
import Button from 'components/common/button';
import AddCardModal from 'components/common/add-card-modal';

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
            <AddCardModal />,
            this.scrollPage
        );
    }

    scrollPage(success) {
        // TODO: maybe scroll to the card when added using actions?
        if (success) {
            zenscroll.toY(document.documentElement.scrollHeight);
        }
    }
}

Header.contextTypes = {
    sideBarOpened: React.PropTypes.bool,
    toggleModalPortal: React.PropTypes.func
};

export default Header;
