import React from 'react';
import ModalCls from './Modal.css';

const Modal = (props) => {

    return (
        <div className = {ModalCls.Modal} 
        style = {{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>
            {props.children}
        </div>
    )
}

export default Modal;