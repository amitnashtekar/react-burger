import React, {Component} from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

class Checkout extends Component {

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }

        }
        this.setState({ingredients: ingredients, totalPrice: price});
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
                <CheckoutSummary ingredients = {this.props.ingredients}
                cancelCheckout = {this.cancelCheckout}
                continueCheckout = {this.continueCheckout} />

                <Route path={this.props.match.path + '/contact-data'}
                component = {ContactData}
                 />)
                } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);