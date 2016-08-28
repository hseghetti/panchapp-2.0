// VENDOR LIBS
import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

class Loading extends React.Component {

    constructor() {
        super();
        this.renderLoading.bind(this);
    }

    render() {
        return (
            <div className={this.getClass()}>
                {this.renderLoading()}
            </div>
        );
    }

    renderLoading() {
        var dataToRender = null;

        if (_.isEmpty(this.props.children)) {
            dataToRender = (
                <div className="loading--animation-container">
                    <span className="loading--animation-item"></span>
                    <span className="loading--animation-item"></span>
                    <span className="loading--animation-item"></span>
                    <span className="loading--animation-item"></span>
                </div>
            );
        } else {
            dataToRender = this.props.children;
        }

        return dataToRender;
    }

    getClass() {
        return classNames({
            'loading': true,
            'loading_spinner': _.isEmpty(this.props.children)
        });
    }
}

export default Loading;
