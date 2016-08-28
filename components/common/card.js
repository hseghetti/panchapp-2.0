// VENDOR LIBS
import React from 'react';

class Card extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="card">
                <div className="card--name">{this.props.name}</div>
                <div className="card--category">{this.props.category}</div>
                <div className="card--date">{this.props.date}</div>
            </div>
        );
    }
}

export default Card;
