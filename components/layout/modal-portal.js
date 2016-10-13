// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

class ModalPortal extends React.Component {

    render() {
        return (
            <div className={this.getClass()}></div>
        );
    }

    getClass() {
        return classNames({
            'modal-portal': true,
            'modal-portal_displayed': this.context.modalPortalDisplayed,
        });
    }
}

ModalPortal.contextTypes = {
    modalPortalDisplayed: React.PropTypes.bool
};

export default ModalPortal;

