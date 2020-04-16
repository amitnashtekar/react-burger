import React from 'react';
import Aux from '../../HOC/Auxilary';

const OrderSummary = (props) => {

    let IngredientsItems = Object.keys(props.ingredients).map(ingrKey => {
        return <li> <p><span>{ingrKey}</span>:{props.ingredients[ingrKey]}</p> </li>
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients !</p>
            <ul>
                {IngredientsItems}
            </ul>
        </Aux>
    )
}

export default OrderSummary;