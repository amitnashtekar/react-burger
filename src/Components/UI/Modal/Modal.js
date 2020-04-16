import React from 'react';
import BackDrop from '../Backdrop/Backdrop';
import Aux from '../../../HOC/Auxilary';
import ModalCls from './Modal.css';

const Modal = (props) => {

    return (
        <Aux>
            <BackDrop show = {props.show}
            cancelOrder = {props.cancelOrder} />
            <div className = {ModalCls.Modal} 
            style = {{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>
                {props.children}
            </div>
        </Aux>
        
    )
}

export default Modal;