import React, {Component} from 'react';
import Burger from '../../Components/Burger/Burger';
import Aux from '../../HOC/Auxilary';

class BurgerBuilder extends Component {

    render() {

        return (
            <Aux>
                <Burger />
                <div>Burger Ingredients</div>
            </Aux>
            
        )
    }
}

export default BurgerBuilder;