import React, {Component} from 'react';
import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input';
import CDClaases from './ContactData.css';

import {connect} from 'react-redux';
import {
    initPurchaseOrder
} from '../../../store/actions';
import axios from '../../../axios-orders';


class ContactData extends Component {
    state = {        
                name: 'Amit Ashekar',
                address: {
                    street: 'test street 1',
                    zipCode: '43256',                        
                },
                email: 'abc@test.com',
                loading: false            
    }
    orderHandler = () => {
        //this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
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
        this.props.initPurchase(order);
        // axios.post('/order.json', order)
        // .then(response => {
        //     console.log(response);
        //     this.setState({loading: false});
        //     this.props.history.push('/');
        // })
        // .catch(error => {
        //     console.log(error);
        //     this.setState({loading: false});
        // });
    }
    render() {
        let form = (
            <React.Fragment>
                <Input inputType="input" type = "text" name="name" placeholder="name" />
                <Input inputType="input" type = "email" name="street" placeholder="street" />
                <Input inputType="input" type = "street" name="name" placeholder="street" />
                <Input inputType="input" type = "zipcode" name="zipcode" placeholder="zipcode" />
                <Button type = "Success"
                clicked = {this.orderHandler}  >Order</Button>
            </React.Fragment>
        )
        if (this.props.loading) {
            form = <Spinner />
        }
        return(
            <div className = {CDClaases.ContactData}>
                {form}               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initPurchase: (orderData) => dispatch(initPurchaseOrder(orderData))
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);