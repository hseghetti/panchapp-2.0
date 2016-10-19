// VENDOR LIBS
import React from 'react';

class Modal extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="modal">
                Modal Content
            </div>
        );
    }
}

Modal.propTypes = {type: React.PropTypes.oneOf(['default', 'add-card'])};

export default Modal;

