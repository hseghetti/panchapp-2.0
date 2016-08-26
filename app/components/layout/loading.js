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
                <div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
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
