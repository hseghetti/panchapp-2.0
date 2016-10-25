// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

// LIBS
import { instance as firebaseStore } from 'lib/firebase-store';

class Modal extends React.Component {

    constructor() {
        super();

        this.state = {
            gridOpened: false,
            users: firebaseStore.getUsers()
        };

        firebaseStore.addChangeListener(this.firebaseStoreChanged.bind(this));
    }

    render() {
        return (
            <div className={this.getClass()}>
                {this.renderModalContent()}
            </div>
        );
    }

    renderModalContent() {
        var types = {
            'add-card' : this.renderAddCardModalContent.bind(this)
        };

        return types[this.props.type]();
    }

    renderAddCardModalContent() {
        return (
            <div>
                {this.renderUsersGrid()}
                Reason List
            </div>
        );
    }

    renderUsersGrid() {
        return (
            <div onClick={this.toggleUsersGrid.bind(this)} className="modal--users-grid">
                {this.state.users.map(this.renderUser.bind(this))}
            </div>
        );
    }

    renderUser(user, index) {
        return (
            <span key={index} name={index} className={this.getGridClass()}>
                {user.displayName}
            </span>
        );
    }

    getClass() {
        return classNames({
            'modal': true,
            'modal_add-card': this.props.type === 'add-card'
        });
    }

    getGridClass() {
        return classNames({
            'modal--users-grid-user': true
        });
    }

    toggleUsersGrid() {
        this.setState({
            gridOpened: !this.state.gridOpened
        });
    }

    firebaseStoreChanged() {
        if (this.props.type === 'add-card') {
            this.setState({
                users: firebaseStore.getUsers()
            });
        }
    }
}

Modal.propTypes = {type: React.PropTypes.oneOf(['default', 'add-card'])};

export default Modal;

