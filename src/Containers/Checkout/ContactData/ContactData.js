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
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },             
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'zip code'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            delivery: {
                elementType: 'select',
                elementConfig: {
                    options:[
                        {value: 'fastest', displayValue:'fastest'},
                        {value: 'cheapest', displayValue:'cheapest'}
                    ]
                },
                value: 'fastest',
                validation: {
                    required: true
                },
                valid: false
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
        let formData = {};
        for(let key in this.state.orderForm) {
            formData[key] = this.state.orderForm[key].value
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData:formData,
            userId: this.props.userId
        }
        this.props.initPurchase(order, this.props.token);
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
    checkValidation(value, rules) {
        let isValid = false;
        if(rules.required) {
            isValid = value.trim().length > 0; 
        }
        return isValid;
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
        updatedOrderForm[inputIdentifier].valid = this.checkValidation(updatedOrderElement.value, updatedOrderForm[inputIdentifier].validation)
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
                    isValid = {formElement.config.valid}
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
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initPurchase: (orderData, token) => dispatch(initPurchaseOrder(orderData, token))
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);