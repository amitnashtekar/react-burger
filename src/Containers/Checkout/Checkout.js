import React, {Component} from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients : {
            salad: 1,
            meat: 1,
            cheese: 2,
            bacon: 2
        }
    }
    cancelCheckout = () => {
        this.props.history.goBack();
    }
    continueCheckout = () => {
        this.props.history.replace('/order-data')
    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredients = {this.state.ingredients}
                cancelCheckout = {this.cancelCheckout}
                continueCheckout = {this.continueCheckout} />
            </div>
        )
    }
}

export default Checkout;