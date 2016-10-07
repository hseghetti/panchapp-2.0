// VENDOR LIBS
import React from 'react';

// COMMON COMPONENTS
import Button from 'components/common/button';

class Card extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="card">
                <div className="card--info">
                    <div className="card--name">{this.props.name}</div>
                    <div className="card--category">{this.props.category}</div>
                    <div className="card--date">{this.props.date}</div>
                </div>
                <Button type="pay">✖</Button>
            </div>
        );
    }
}

export default Card;
