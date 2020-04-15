import React from 'react';
import BuildControlCls from './BuildControl.css';

const BuildControl = (props) => {
    return (
        <div className = {BuildControlCls.BuildControl}>
            <div className = {BuildControlCls.Label}>{props.label}</div>
            <button className = {BuildControlCls.More}>more</button>
            <button className = {BuildControlCls.Less}>less</button>
        </div>      
    )
}

export default BuildControl;