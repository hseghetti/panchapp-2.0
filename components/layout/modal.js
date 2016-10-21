// VENDOR LIBS
import React from 'react';

class Modal extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="modal">
                {this.renderModalContent()}
            </div>
        );
    }

    renderModalContent() {
        var types = {
            'add-card' : this.renderAddCardModalContent
        };

        return types[this.props.type]();
    }

    renderAddCardModalContent() {
        return (
            <div>
                User List
                Reason List
            </div>
        );
    }
}

Modal.propTypes = {type: React.PropTypes.oneOf(['default', 'add-card'])};

export default Modal;

