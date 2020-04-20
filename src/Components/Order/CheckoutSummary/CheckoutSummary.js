import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import CSClasses from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div className = {CSClasses.CheckoutSummary}>
            <h1>Hope you would enjoy this Burger !</h1>
            <Burger 
            style = {{width:"100%", margin:'auto'}}
            ingredients = {props.ingredients} />           
            <Button type = "Danger" clicked = {props.cancelCheckout}>CANCEL</Button>
            <Button type = "Success" clicked = {props.continueCheckout}>CONTINUE</Button>
        </div>
    )
}

export default CheckoutSummary;