import React from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import BurgerCls from './Burger.css';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients);
    transformedIngredients = transformedIngredients.map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
                                    
                                


    return (
        <div className = {BurgerCls.Burger}>
            <BurgerIngredient type = {'bread-top'} />
            {transformedIngredients}
            <BurgerIngredient type = {'bread-bottom'} />
        </div>
    )
}

export default Burger;