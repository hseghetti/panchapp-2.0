import React from 'react';

class Cards extends React.Component {

    constructor() {
        super();

        this.state = {
            cards: {}
        };
    }

    render() {
        return (
            <div className="cards">
                {this.state.cards && Object.keys(this.state.cards).map(this.renderCardUsers.bind(this))}
            </div>
        );
    }

    renderCardUsers (card) {
        return <div>{this.state.cards[card].name}</div>;
    }
}

export default Cards;
