import React from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl';
import BuildControlsCls from './BuildControls.css';
const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const BuildControls = (props) => {

    return (
    <div className = {BuildControlsCls.BuildControls}>
        <p>Total Price : <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
            return <BuildControl key ={ctrl.label}
             label = {ctrl.label}
             add = {props.addIngredient.bind(this, ctrl.type)}
             remove = {props.removeIngredient.bind(this, ctrl.type)}
             disable = {props.disableInfo[ctrl.type]} />
        })}
        <button 
        disabled = {!props.purchesable} 
        className = {BuildControlsCls.OrderButton}
        onClick = {props.order}>
        {props.isAuth? 'ORDER NOW' : 'SIGN UP TO ORDER'}
        </button>
    </div>
    )
}

export default BuildControls;