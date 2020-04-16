import React from 'react';
import Aux from '../../HOC/Auxilary';
import Button from '../UI/Button/Button';

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
            <h3>do you want to checkout?</h3>
            <Button clicked = {props.cancelOrder} type="Danger">Cancel</Button>
            <Button clicked ={props.checkout} type="Success">Checkout</Button>
        </Aux>
    )
}

export default OrderSummary;