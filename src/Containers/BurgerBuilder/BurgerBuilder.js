import React, {Component} from 'react';
import Burger from '../../Components/Burger/Burger';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
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
        totalPrice : 10,
        purchesable: false,
        purchasing: false
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
        this.setPurchesable(updatedIngredients);
    }

    removeIngredientHandler =(type) => {
        let updatedIngredients = {
            ...this.state.ingredients
        }
        if (updatedIngredients[type] <= 0) {
            return;
        }
        updatedIngredients[type] = updatedIngredients[type] -1;
        let updatedPrice = this.state.totalPrice;
        updatedPrice = updatedPrice - INGREDIENT_PRICES[type];
        this.setState({totalPrice : updatedPrice, ingredients : updatedIngredients});
        this.setPurchesable(updatedIngredients);
    }

    setPurchesable = (ingredients) => {
        let sum = Object.keys(ingredients).map((ingrKey) => {
            return ingredients[ingrKey]
        }).reduce((sum, el) => {
            return sum + el
        },0);
        
        this.setState({purchesable: sum > 0})
    }
    orderHandler = () => {
        this.setState({purchasing: true})
    }
    cancelOrderHandler = () => {
        this.setState({purchasing: false})
    }
    checkoutHandler = () => {
        alert('checkout clicked !');
    }
    render() {
            let disableInfo = {
                ...this.state.ingredients
            }
            for (let key in disableInfo) {
                disableInfo[key] = disableInfo[key] <=0 
            }
        return (
            <Aux>
                <Modal show={this.state.purchasing} cancelOrder = {this.cancelOrderHandler}>
                    <OrderSummary cancelOrder = {this.cancelOrderHandler}
                    checkout = {this.checkoutHandler}
                     ingredients = {this.state.ingredients} />
                </Modal>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls 
                addIngredient = {this.addIngredientHadnler}
                removeIngredient = {this.removeIngredientHandler}
                disableInfo= {disableInfo}
                totalPrice = {this.state.totalPrice}
                purchesable = {this.state.purchesable}
                order = {this.orderHandler} />
            </Aux>
            
        )
    }
}

export default BurgerBuilder;