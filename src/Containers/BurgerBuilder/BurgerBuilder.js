import React, {Component} from 'react';
import Burger from '../../Components/Burger/Burger';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Aux from '../../HOC/Auxilary';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

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
        purchasing: false,
        loading: false
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
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Amit Ashekar',
                address: {
                    street: 'test street 1',
                    zipCode: '43256',
                    country: 'Australia'
                },
                email: 'abc@test.com'
            },
            deliveryMethod: 'fast'
        }
        axios.post('order', order)
        .then(response => {
            console.log(response);
            this.setState({loading: false, purchasing: false});
        })
        .catch(error => {
            console.log(error);
            this.setState({loading: false, purchasing: false});
        });
    }
    render() {
            let disableInfo = {
                ...this.state.ingredients
            }
            for (let key in disableInfo) {
                disableInfo[key] = disableInfo[key] <=0 
            }
            let orderSummary = <OrderSummary cancelOrder = {this.cancelOrderHandler}
                checkout = {this.checkoutHandler}
                 ingredients = {this.state.ingredients}
                 totalPrice = {this.state.totalPrice} />
            if (this.state.loading) {
                orderSummary = <Spinner />
            }
        return (
            <Aux>
                <Modal show={this.state.purchasing} cancelOrder = {this.cancelOrderHandler}>
                    {orderSummary}
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

export default withErrorHandler(BurgerBuilder, axios);