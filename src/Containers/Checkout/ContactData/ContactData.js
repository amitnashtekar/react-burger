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
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'email'
                },
                value: ''
            },             
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'country'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your street'
                },
                value: ''
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'zip code'
                },
                value: ''
            },
            delivery: {
                elementType: 'select',
                elementConfig: {
                    options:[
                        {value: 'fastest', displayValue:'fastest'},
                        {value: 'cheapest', displayValue:'cheapest'}
                    ]
                },
                value: 'fastest'
            }
            

        }
    }
    // state = {        
    //             name: 'Amit Ashekar',
    //             address: {
    //                 street: 'test street 1',
    //                 zipCode: '43256',                        
    //             },
    //             email: 'abc@test.com',
    //             loading: false            
    // }
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
    onChangeHandler = (inputIdentifier, event) => {
        //console.log(event.target.value);
        let updatedOrderForm = {
            ...this.state.orderForm
        }
        let updatedOrderElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedOrderElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedOrderElement;
        this.setState({orderForm: updatedOrderForm})
    }
    render() {
        const formElementArray = [];
        for(let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config:this.state.orderForm[key]                 
            })
        }

        let form = (
            <React.Fragment>
                {
                    formElementArray.map(formElement => {
                    return <Input 
                    key= {formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig= {formElement.config.elementConfig} 
                    value = {formElement.config.value}
                    changed = {this.onChangeHandler.bind(this, formElement.id)}
                     />
                })
            }
                
              
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