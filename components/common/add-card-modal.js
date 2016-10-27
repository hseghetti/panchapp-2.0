// VENDOR LIBS
import React from 'react';

class AddCardModal extends React.Component {

    constructor() {
        super();

        this.state = {
            reasonListOpened: false,
            reasonSelected: '',
            userListOpened: false,
            userSelected: ''
        };
    }

    render() {
        return (
            <div className="add-card-modal">
                {this.renderPicker('user')}
                {this.renderPicker('reason')}
            </div>
        );
    }

    renderPicker(type) {
        var contentToRender;
        var types = {
            reason: 'Reason',
            user: 'User'
        };
        var userSelected = this.state[type + 'Selected'] || 'Pick ' + types[type];

        if (this.state[type + 'ListOpened']) {
            contentToRender = this.renderList(type);
        } else {
            contentToRender = <span onClick={this.openList.bind(this, type)} className="add-card-modal--picker">{userSelected}</span>;
        }

        return contentToRender;
    }

    renderList(type) {
        var lists = {
            reason: this.renderReasonList,
            user: this.renderUserList
        };

        return lists[type]();
    }

    renderReasonList() {
        return <span className="add-card-modal--list">Reasons List</span>;
    }

    renderUserList() {
        return <span className="add-card-modal--list">Users List</span>;
    }

    openList(type) {
        var newState = {};

        newState[type + 'ListOpened'] = true;
        this.setState(newState);
    }
}

export default AddCardModal;

