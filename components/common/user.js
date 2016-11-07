// VENDOR
import React from 'react';
import classNames from 'classnames';

class User extends React.Component {

    constructor() {
        super();

        this.timeout = null;
        this.state = {
            hidden: true,
            unmounted: false
        };
    }

    componentWillMount() {
        this.timeout = this.props.wait; //TODO: extract timeout functionality to a new wrapper

        setTimeout(function () {
            this.show();
        }.bind(this), this.timeout);
    }

    componentWillUnmount() {
        this.timeout = null;
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
        if (this.timeout !== null) {
            this.setState({hidden: false});
        }
    }
}

export default User;

