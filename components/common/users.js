// VENDOR LIBS
import React from 'react';

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
                <Loading loading={!this.state.users.length}>
                    <div className="users--grid">
                        {this.state.users.map(this.renderUser.bind(this))}
                    </div>
                </Loading>
            </div>
        );
    }

    renderUser (user, index) {
        var user = this.state.users[index];

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
