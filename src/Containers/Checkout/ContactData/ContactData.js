import React, {Component} from 'react';
import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import CDClaases from './ContactData.css';
import axios from '../../../axios-orders';
import {connect} from 'react-redux';

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
        this.setState({loading: true});
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
        axios.post('/order.json', order)
        .then(response => {
            console.log(response);
            this.setState({loading: false});
            this.props.history.push('/');
        })
        .catch(error => {
            console.log(error);
            this.setState({loading: false});
        });
    }
    render() {
        let form = (
            <React.Fragment>
                <input type = "text" name="name" placeholder="name" />
                <input type = "email" name="street" placeholder="street" />
                <input type = "street" name="name" placeholder="street" />
                <input type = "zipcode" name="zipcode" placeholder="zipcode" />
                <Button type = "Success"
                clicked = {this.orderHandler}  >Order</Button>
            </React.Fragment>
        )
        if (this.state.loading) {
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
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData);