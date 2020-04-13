import React from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import BurgerCls from './Burger.css';

const Burger = (props) => {

    return (
        <div className = {BurgerCls.Burger}>
            <BurgerIngredient type = {props.type || 'bread-top'} />
            <BurgerIngredient type = {props.type || 'Cheese'} />
            <BurgerIngredient type = {props.type || 'Salad'} />
            <BurgerIngredient type = {props.type || 'bread-bottom'} />
        </div>
    )
}

export default Burger;