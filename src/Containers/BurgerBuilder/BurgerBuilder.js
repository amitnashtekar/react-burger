import React, {Component} from 'react';
import Burger from '../../Components/Burger/Burger';
import Aux from '../../HOC/Auxilary';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 2,
            cheese: 2,
            bacon: 1
        }
    }
    render() {

        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <div>Burger Ingredients</div>
            </Aux>
            
        )
    }
}

export default BurgerBuilder;