import React from "react";
import * as ReactDOM from 'react-dom';
import './Modal.css'

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="modal-bg">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal }