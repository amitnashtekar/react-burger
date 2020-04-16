import React from 'react';
import ButtonCls from './Button.css';

const Button = (props) => (
    <button onClick = {props.clicked} 
    className = {[ButtonCls.Button, ButtonCls[props.type]].join(' ')}>
        {props.children}
    </button>
)

export default Button;