// VENDOR LIBS
import React from 'react';
import _ from 'lodash';

// LIBS
import FirebaseStore from 'lib/firebase-store';

// LAYOUT COMPONENTS
import Loading from 'components/layout/loading';

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
                <Loading>
                    {this.renderCards()}
                </Loading>
            </div>
        );
    }

    renderCards() {
        if (!_.isEmpty(this.state.cards)) {
            return Object.keys(this.state.cards).map(this.renderCardUsers.bind(this));
        }
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
