// VENDOR LIBS
import React from 'react';
import _ from 'lodash';

// LIBS
import { instance as firebaseStore } from 'lib/firebase-store';

// LAYOUT COMPONENTS
import Loading from 'components/layout/loading';

class Users extends React.Component {

    constructor() {
        super();

        firebaseStore.addChangeListener(this.loadUsers.bind(this));

        this.state = {
            users: firebaseStore.getUsers()
        };
    }

    componentWillUnmount() {
        firebaseStore.removeChangeListener(this.loadUsers.bind(this));
    }

    render() {
        return (
            <div className="users">
                <Loading loading={_.isEmpty(this.state.users)}>
                    {this.renderUsers()}
                </Loading>
            </div>
        );
    }

    renderUsers() {
        return Object.keys(this.state.users).map(this.renderUser.bind(this));
    }

    renderUser (user) {
        var user = this.state.users[user];

        return user.displayName;
    }

    loadUsers() {
        this.setState({
            users: firebaseStore.getUsers()
        });
    }
}

export default Users;
