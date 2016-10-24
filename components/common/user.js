// VENDOR
import React from 'react';
import classNames from 'classnames';

class User extends React.Component {

    constructor() {
        super();

        this.state = {
            hidden: true
        };
    }

    componentWillMount() {
        setTimeout(function () {
            this.show();
        }.bind(this), this.props.wait);
    }

    render() {
        return (
            <div className={this.getClass()}>
                <div className="user--name">{this.props.displayName}</div>
                <img {...this.getImgProps('pencil')} />
                <img {...this.getImgProps('bin')} />
            </div>
        );
    }

    getClass() {
        return classNames({
            'user': true,
            'user_displayed': !this.state.hidden
        });
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

    show() {
        this.setState({hidden: false});
    }
}

export default User;

