// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import _ from 'lodash';

// LIBS
import firebaseServiceCaller from 'lib/firebase-service-caller';

// COMMON COMPONENTS
import Button from 'components/common/button';

class Card extends React.Component {

    constructor() {
        super();

        this.timeout = null;
        this.state = {
            hidden: true
        };

        this.getClass.bind(this);
        this.isReallyOld.bind(this);
    }

    componentWillMount() {
        this.timeout = this.props.wait; //TODO: extract timeout functionality to a new wrapper

        setTimeout(function () {
            this.show();
        }.bind(this), this.props.wait);
    }

    componentWillUnmount() {
        this.timeout = null;
    }

    render() {
        var cardData = this.props.cardData;

        return (
            <div className={this.getClass()}>
                <Button {...this.getButtonProps()}>✖</Button>
                <div className="card--info">
                    <div className="card--name">{cardData.name}</div>
                    <div className="card--info-label">Reason</div>
                    <div className="card--category">{cardData.cat}</div>
                    <div className="card--info-label">Date</div>
                    <div className={this.getDateClass()}>
                        {moment(cardData.date, 'MM/DD/YYYY, HH:mm').format('DD MMM YYYY, HH:mm')}
                    </div>
                </div>
            </div>
        );
    }

    getClass() {
        return classNames({
            'card': true,
            'card_displayed': !this.state.hidden,
            'card_really-old': this.isReallyOld()
        });
    }

    getButtonProps() {
        return {
            className: 'card--button',
            onClick: this.removeCard.bind(this),
            type: 'pay'
        };
    }

    getDateClass() {
        return classNames({
            'card--date': true,
            'card--date_really-old': this.isReallyOld(),
        });
    }

    isReallyOld() {
        return moment(this.props.cardData.date, 'MM/DD/YYYY, HH:mm').isBefore(moment().subtract(5, 'weeks'));
    }

    removeCard() {
        var cardData = this.props.cardData;
        var promptResponse = prompt('Why are you removing this card?', 'Payed');

        if (!_.isEmpty(cardData) && promptResponse) {
            firebaseServiceCaller.delete('cards', cardData, promptResponse);
        }
    }

    show() {
        if (this.timeout !== null) {
            this.setState({hidden: false});
        }
    }
}

Card.propTypes = {
    cardData: React.PropTypes.shape({
        cat: React.PropTypes.string.isRequired,
        date: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired
    }).isRequired,
    wait: React.PropTypes.number
};

export default Card;
