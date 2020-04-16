import React from 'react';
import BackDropCls from './Backdrop.css';

const BackDrop = (props) =>(
    props.show ? <div className = {BackDropCls.Backdrop}
                onClick = {props.cancelOrder}></div> : null
)

export default BackDrop;