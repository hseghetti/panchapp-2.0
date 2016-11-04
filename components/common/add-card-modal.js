// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';

// LIBS
import { instance as firebaseStore } from 'lib/firebase-store';

// COMMON COMPONENTS
import Button from 'components/common/button';

class AddCardModal extends React.Component {

    constructor() {
        super();

        firebaseStore.addChangeListener(this.loadUsers.bind(this));

        this.state = {
            reasonListOpened: false,
            reasonSelected: '',
            userListOpened: false,
            users: firebaseStore.getUsers(),
            userSelected: ''
        };

        this.getPickerClass.bind(this);
    }

    componentWillUnmount() {
        firebaseStore.removeChangeListener(this.loadUsers.bind(this));
    }

    render() {
        return (
            <div className="add-card-modal">
                {this.renderPicker('user')}
                {this.renderPicker('reason')}
                {this.renderSubmitButton()}
            </div>
        );
    }

    renderPicker(type) {
        var contentToRender;
        var types = {
            reason: 'Reason',
            user: 'User'
        };
        var typeSelected = this.state[type + 'Selected'] || 'Pick ' + types[type];

        if (this.state[type + 'ListOpened']) {
            contentToRender = this.renderList(type);
        } else {
            contentToRender = (
                <span onClick={this.openList.bind(this, type)} className={this.getPickerClass(type)}>
                    {typeSelected}
                </span>
            );
        }

        return contentToRender;
    }

    renderSubmitButton() {
        return (
            <Button type="submit" className={this.getSubmitButtonClass()}>
                <img className="add-card-modal--paper-plane" src={'resources/paper-plane.png'} />
            </Button>
        );
    }

    renderList(type) {
        var reasons = [
            'Panched',
            'Filth',
            'Phone rings in a meeting',
            'New member',
            'Birthday',
            'Other...'
        ];
        var array = (type === 'user') ? this.state.users : reasons;

        return <span className="add-card-modal--list">{array.map(this.renderItem.bind(this, type))}</span>;
    }

    renderItem(type, item, index) {
        var text = (type === 'user') ? item.displayName : item;
        var props = {
            className: 'add-card-modal--list-item',
            key: index,
            onClick: this.setItemSelected.bind(this, text, type)
        };

        return <div {...props}>{text}</div>;
    }

    getPickerClass(type) {
        return classNames({
            'add-card-modal--picker': true,
            'add-card-modal--picker_item-selected': !this.state[type + 'ListOpened'] && this.state[type + 'Selected'],
        });
    }

    getSubmitButtonClass() {
        return classNames({
            'add-card-modal--submit': true,
            'add-card-modal--submit_displayed': this.state.userSelected && this.state.reasonSelected,
        });
    }

    setItemSelected(text, type) {
        var newState = {};

        newState[type + 'ListOpened'] = false;
        newState[type + 'Selected'] = text;

        this.setState(newState);
    }

    openList(type) {
        var newState = {};

        newState[type + 'ListOpened'] = true;
        this.setState(newState);
    }

    loadUsers() {
        this.setState({
            users: firebaseStore.getUsers()
        });
    }
}

export default AddCardModal;

