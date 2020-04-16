import React from 'react';
import BuildControlCls from './BuildControl.css';

const BuildControl = (props) => {
    return (
        <div className = {BuildControlCls.BuildControl}>
            <div className = {BuildControlCls.Label}>{props.label}</div>
            <button className = {BuildControlCls.More}
            onClick = {props.add}
            >more</button>
            <button className = {BuildControlCls.Less}
            onClick = {props.remove} 
            disabled = {props.disable}>less</button>
        </div>      
    )
}

export default BuildControl;