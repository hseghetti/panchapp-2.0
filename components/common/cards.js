// VENDOR LIBS
import React from 'react';

// LIBS
import { instance as firebaseStore } from 'lib/firebase-store';

// LAYOUT COMPONENTS
import Loading from 'components/layout/loading';

// COMMON COMPONENTS
import Card from 'components/common/card';

class Cards extends React.Component {

    constructor() {
        super();

        this.state = {
            cards: firebaseStore.getCards()
        };
        firebaseStore.addChangeListener(this.loadCards.bind(this));
    }

    componentWillUnmount() {
        firebaseStore.removeChangeListener(this.loadCards.bind(this));
    }

    render() {
        return (
            <div className="cards">
                <Loading loading={!this.state.cards.length}>
                    {this.state.cards.map(this.renderCard.bind(this))}
                </Loading>
            </div>
        );
    }

    renderCard (card, index) {
        return <Card {...this.getCardProps(card, index)} />;
    }

    getCardProps(card, index) {
        return {
            cardData: card,
            key: index,
            wait: index * 100
        };
    }

    loadCards() {
        this.setState({
            cards: firebaseStore.getCards()
        });
    }
}

export default Cards;
