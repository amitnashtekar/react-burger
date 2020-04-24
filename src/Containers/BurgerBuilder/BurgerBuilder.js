import React, {Component} from 'react';
import Burger from '../../Components/Burger/Burger';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Aux from '../../HOC/Auxilary';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';



class BurgerBuilder extends Component {
    state = {        
        purchesable: false,
        purchasing: false,
        loading: false
    }
    componentDidMount () {
        this.setState({loading: true});
        axios.get('/ingredients.json')
        .then(res => {
            console.log(res);
            this.setState({loading: false});
            this.setState({ingredients: res.data});
        })
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
        const queryParams = [];
        for (let i in this.props.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ingredients[i]));
        }
        queryParams.push('price=' + this.props.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
        // this.setState({loading: true});
        // const order = {
        //     ingredients: this.props.ingredients,
        //     price: this.props.totalPrice,
        //     customer: {
        //         name: 'Amit Ashekar',
        //         address: {
        //             street: 'test street 1',
        //             zipCode: '43256',
        //             country: 'Australia'
        //         },
        //         email: 'abc@test.com'
        //     },
        //     deliveryMethod: 'fast'
        // }
        // axios.post('/order.json', order)
        // .then(response => {
        //     console.log(response);
        //     this.setState({loading: false, purchasing: false});
        // })
        // .catch(error => {
        //     console.log(error);
        //     this.setState({loading: false, purchasing: false});
        // });
    }
    render() {
            let disableInfo = {
                ...this.props.ingredients
            }
            for (let key in disableInfo) {
                disableInfo[key] = disableInfo[key] <=0 
            }
            let orderSummary = null;
            let burger = null;
            if (this.state.loading) {
                orderSummary = <Spinner />;
                burger = <Spinner />;
            }
            if (this.props.ingredients) {
                orderSummary = <OrderSummary cancelOrder = {this.cancelOrderHandler}
                checkout = {this.checkoutHandler}
                 ingredients = {this.props.ingredients}
                 totalPrice = {this.props.totalPrice} />;
                 burger = (
                     <Aux>
                         <Burger ingredients = {this.props.ingredients} />
                            <BuildControls 
                            addIngredient = {this.props.addIngredientHadnler}
                            removeIngredient = {this.props.removeIngredientHandler}
                            disableInfo= {disableInfo}
                            totalPrice = {this.props.totalPrice}
                            purchesable = {this.state.purchesable}
                            order = {this.orderHandler} />
                     </Aux>
                 )
            }
             
            
        return (
            <Aux>
                <Modal show={this.state.purchasing} cancelOrder = {this.cancelOrderHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredientHadnler: (ingName) =>dispatch({type:actionTypes.ADD_INGREDIENTS,ingredientName:ingName}) ,
        removeIngredientHandler: (ingName) =>dispatch({type:actionTypes.REMOVE_INGREDIENTS,ingredientName:ingName}) 

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));