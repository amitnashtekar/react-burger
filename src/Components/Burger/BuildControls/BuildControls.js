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
        {controls.map(ctrl => {
            return <BuildControl key ={ctrl.label}
             label = {ctrl.label}
             add = {props.addIngredient.bind(this, ctrl.type)} />
        })}

    </div>
    )
}

export default BuildControls;