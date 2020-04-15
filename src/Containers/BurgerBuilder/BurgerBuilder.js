import React, {Component} from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Aux from '../../HOC/Auxilary';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        }
    }
    render() {

        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls />
            </Aux>
            
        )
    }
}

export default BurgerBuilder;