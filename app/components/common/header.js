import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                {this.renderTitle()}
            </div>
        );
    }

    renderTitle() {
        return <div className="header--title">PanchApp 2.0</div>;
    }
}

export default Header;
