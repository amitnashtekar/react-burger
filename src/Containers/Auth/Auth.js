import React, {Component} from 'react';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import classes from './Auth.css';

class Auth extends Component {
    state = {
        controls : {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'email address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            }
        }
    }
    checkValidation(value, rules) {
        let isValid = false;
        if(rules.required) {
            isValid = value.trim().length > 0; 
        }
        return isValid;
    }
    onChangeHandler = (inputIdentifier, event) => {
        let updatedOrderForm = {
            ...this.state.controls
        }
        let updatedOrderElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedOrderElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedOrderElement;
        updatedOrderForm[inputIdentifier].valid = this.checkValidation(updatedOrderElement.value, updatedOrderForm[inputIdentifier].validation)
        this.setState({controls: updatedOrderForm})
    }
    render () {
        const formElementArray = [];
        for(let key in this.state.controls) {
            formElementArray.push({
                id: key,
                config:this.state.controls[key]                 
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
                 >Submit</Button>
            </React.Fragment>
        )
        return (
            <div className = {classes.Auth}>
                <form>
                    {form}
                </form>

            </div>
        )
    }

}

export default Auth;