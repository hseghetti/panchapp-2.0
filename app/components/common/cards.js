import React from 'react';
import FirebaseStore from '../../stores/firebase-store';

class Cards extends React.Component {

    constructor() {
        super();

        this.firebaseStore = new FirebaseStore();

        this.firebaseStore.addChangeListener(this.loadCards.bind(this));

        this.state = {
            cards: this.firebaseStore.getCards()
        };
    }

    render() {
        return (
            <div className="cards">
                {this.state.cards && Object.keys(this.state.cards).map(this.renderCardUsers.bind(this)) || 'NO HAY CARDS'}
            </div>
        );
    }

    renderCardUsers (card) {
        return <div>{this.state.cards[card].name}</div>;
    }

    loadCards() {
        this.setState({
            cards: this.firebaseStore.getCards()
        });
    }
}

export default Cards;
