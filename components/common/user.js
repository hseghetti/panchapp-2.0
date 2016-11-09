// VENDOR
import React from 'react';
import classNames from 'classnames';

class User extends React.Component {

    render() {
        return (
            <div className="user">
                <div className="user--name">{this.props.displayName}</div>
                <img {...this.getImgProps('pencil')} />
                <img {...this.getImgProps('bin')} />
            </div>
        );
    }

    getImgProps(type) {
        var classes = classNames({
            'user--icon': true,
            'user--icon-pencil' : type === 'pencil',
            'user--icon-bin' : type === 'bin'
        });

        return {
            className: classes,
            src: 'resources/' + type + '.png'
        };
    }
}

export default User;

