// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import _ from 'lodash';

// LIBS
import { instance as firebaseStore } from 'lib/firebase-store';
import firebaseServiceCaller from 'lib/firebase-service-caller';

// COMMON COMPONENTS
import Button from 'components/common/button';

class AddCardModal extends React.Component {

    constructor() {
        super();

        firebaseStore.addChangeListener(this.firebaseStoreChanged.bind(this));

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
        firebaseStore.removeChangeListener(this.firebaseStoreChanged.bind(this));
    }

    render() {
        return (
            <div className="add-card-modal">
                {this.renderTitle()}
                {this.renderPicker('user')}
                {this.renderPicker('reason')}
                {this.renderSubmitButton()}
            </div>
        );
    }

    renderTitle() {
        return (
            <div className="add-card-modal--title">
                Add New Card
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
        var props = {
            className: this.getSubmitButtonClass(),
            onClick: this.handleSubmitButtonClick.bind(this),
            type: 'submit'
        };

        return (
            <Button {...props}>
                <img className="add-card-modal--paper-plane" src={'resources/paper-plane.png'} />
            </Button>
        );
    }

    renderList(type) {
        var reasons = [
            'Panched',
            'Garbage',
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

    handleSubmitButtonClick() {
        if (this.state.userSelected !== 'Pick User') {
            firebaseServiceCaller.update('cards', {
                cat: this.state.reasonSelected,
                date: moment().utcOffset('-03:00').format('MM/DD/YYYY, HH:mm'),
                name: this.state.userSelected
            }, this.context.toggleModalPortal);
        }
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

    firebaseStoreChanged() {
        var users = firebaseStore.getUsers();

        if (!_.isEqual(users, this.state.users)) {
            this.setState({users: users});
        }
    }
}

AddCardModal.contextTypes = {
    toggleModalPortal: React.PropTypes.func
};

export default AddCardModal;

