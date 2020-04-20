import React, {Component} from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends Component {
    state = {
        ingredients : {
            salad: 1,
            meat: 1,
            cheese: 2,
            bacon: 2
        }
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {            
                ingredients[param[0]] = +param[1];         
        }
        this.setState({ingredients: ingredients});
    }
    cancelCheckout = () => {
        this.props.history.goBack();
    }
    continueCheckout = () => {
        this.props.history.replace('/checkout/contact-data')
    }
    render() {

        return (
            <div>
                <CheckoutSummary ingredients = {this.state.ingredients}
                cancelCheckout = {this.cancelCheckout}
                continueCheckout = {this.continueCheckout} />

                <Route path={this.props.match.path + '/contact-data'} component = {ContactData} />
            </div>
        )
    }
}

export default Checkout;