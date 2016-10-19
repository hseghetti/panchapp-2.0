// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

class ModalPortal extends React.Component {

    constructor() {
        super();
        this.state = {
            modalToDisplay: null,
            portalDisplayed: false
        };
    }

    getChildContext() {
        return {
            modalPortalDisplayed: this.state.modalPortalDisplayed,
            toggleModalPortal: this.toggleModalPortal.bind(this)
        };
    }

    render() {
        return (
            <div>
                {this.renderPortal()}
                {this.props.children}
            </div>
        );
    }

    renderPortal() {
        var portal = null;

        if (this.state.modalPortalDisplayed) {
            portal = (
                <div>
                    <div onClick={this.toggleModalPortal.bind(this)} className={this.getClass()} />
                    <div className="modal-portal--content">
                        {this.state.modalToDisplay}
                    </div>
                </div>
            );
        }

        return portal;
    }

    getClass() {
        return classNames({
            'modal-portal': true,
            'modal-portal_displayed': this.state.modalPortalDisplayed
        });
    }

    toggleModalPortal(modalToDisplay, callback) {
        var newState = {};

        newState.modalPortalDisplayed = !this.state.modalPortalDisplayed;

        if (modalToDisplay && callback) {
            newState.closeCallback = callback;
            newState.modalToDisplay = modalToDisplay;
        }

        this.setState(newState, this.executeCallback);
    }

    executeCallback() {
        if (!this.state.modalPortalDisplayed && this.state.closeCallback) {
            this.state.closeCallback();
        }
    }
}

ModalPortal.propTypes = {
    modalToDisplay: React.PropTypes.node
};

ModalPortal.childContextTypes = {
    modalPortalDisplayed: React.PropTypes.bool,
    toggleModalPortal: React.PropTypes.func
};

export default ModalPortal;

