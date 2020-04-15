import React, {Component} from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Aux from '../../HOC/Auxilary';

const INGREDIENT_PRICES = {
        salad: 0.4,
        meat: 1.3,
        cheese: 0.8,
        bacon: 1.1
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice : 10
    }

    addIngredientHadnler = (type) => {
        console.log('type', type);
        let updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedIngredients[type] + 1;
        let updatedPrice = this.state.totalPrice;
        updatedPrice = updatedPrice + INGREDIENT_PRICES[type];
        this.setState({totalPrice : updatedPrice, ingredients : updatedIngredients});
    }
    render() {

        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls addIngredient = {this.addIngredientHadnler} />
            </Aux>
            
        )
    }
}

export default BurgerBuilder;