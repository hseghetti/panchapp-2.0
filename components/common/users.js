// VENDOR LIBS
import React from 'react';
import _ from 'lodash';

// LIBS
import { instance as firebaseStore } from 'lib/firebase-store';

// LAYOUT COMPONENTS
import Loading from 'components/layout/loading';

// COMMON COMPONENTS
import User from 'components/common/user';

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
        return <div className="users--grid">{Object.keys(this.state.users).map(this.renderUser.bind(this))}</div>;
    }

    renderUser (user, index) {
        var user = this.state.users[user];

        return (
            <div key={index} className="users--grid-item">
                <User wait={index * 50} displayName={user.displayName} />
            </div>
        );
    }

    loadUsers() {
        this.setState({
            users: firebaseStore.getUsers()
        });
    }
}

export default Users;
