// VENDOR LIBS
import React from 'react';
import _ from 'lodash';

// LIBS
import { instance as firebaseStore } from 'lib/firebase-store';

// LAYOUT COMPONENTS
import Loading from 'components/layout/loading';

// COMMON COMPONENTS
import Card from 'components/common/card';

class Cards extends React.Component {

    constructor() {
        super();

        firebaseStore.addChangeListener(this.loadCards.bind(this));

        this.state = {
            cards: firebaseStore.getCards()
        };
    }

    componentWillUnmount() {
        firebaseStore.removeChangeListener(this.loadCards.bind(this));
    }

    render() {
        return (
            <div className="cards">
                <Loading loading={_.isEmpty(this.state.cards)}>
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

    renderCardUsers (card, index) {
        return <Card {...this.getCardProps(card, index)} />;
    }

    getCardProps(card, index) {
        var card = this.state.cards[card];

        return {
            category: card.cat,
            date: card.date,
            key: index,
            name: card.name
        };
    }

    loadCards() {
        this.setState({
            cards: firebaseStore.getCards()
        });
    }
}

export default Cards;
