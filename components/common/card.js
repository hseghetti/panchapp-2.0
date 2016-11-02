// VENDOR LIBS
import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

// COMMON COMPONENTS
import Button from 'components/common/button';

class Card extends React.Component {

    constructor() {
        super();

        this.state = {
            hidden: true
        };
    }

    componentWillMount() {
        setTimeout(function () {
            this.show();
        }.bind(this), this.props.wait);
    }

    render() {
        return (
            <div className={this.getClass()}>
                <Button className="card--button" type="pay">✖</Button>
                <div className="card--info">
                    <div className="card--name">{this.props.name}</div>
                    <div className="card--info-label">Reason</div>
                    <div className="card--category">{this.props.category}</div>
                    <div className="card--info-label">Date</div>
                    <div className="card--date">
                        {moment(this.props.date, 'MM/DD/YYYY, HH:mm').format('DD MMM YYYY, HH:mm')}
                    </div>
                </div>
            </div>
        );
    }

    getClass() {
        return classNames({
            'card': true,
            'card_displayed': !this.state.hidden
        });
    }

    show() {
        this.setState({hidden: false});
    }
}

Card.propTypes = {wait: React.PropTypes.number};

export default Card;
