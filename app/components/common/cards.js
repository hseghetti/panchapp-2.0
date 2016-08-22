import React from 'react';
import $ from 'jquery';

class Cards extends React.Component {

    constructor() {
        super();

        this.state = {
            cards: {}
        };
    }

    componentWillMount() {
        $.ajax({
            type: 'GET',
            url: '/getCards'
        })
        .done(function (res) {
            this.setState({
                cards: res
            });
        }.bind(this));
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
