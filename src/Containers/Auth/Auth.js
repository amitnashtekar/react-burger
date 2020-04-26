import React, {Component} from 'react';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import classes from './Auth.css';
import {connect} from 'react-redux';
import {auth} from '../../store/actions';

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
        },
        isSignUp : true
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
    onSubmitHandler = (event) => {
        event.preventDefault();
        let email = this.state.controls['email'].value;
        let password = this.state.controls['password'].value;

        this.props.onAuth(email, password, this.state.isSignUp);
    }
    switchSignUpHandler = (event) => {
        event.preventDefault();
        this.setState(prevState => {
            return {isSignUp : !prevState.isSignUp}
        })
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
                
                <Button type = "Success">
                    SUBMIT
                </Button>
                <Button type = "Success"
                clicked = {this.switchSignUpHandler}>
                Switch to  {this.state.isSignUp?'SIGN IN' : 'SIGN UP'}</Button>
            </React.Fragment>
        )
        return (
            <div className = {classes.Auth}>
                <form onSubmit = {this.onSubmitHandler}>
                    {form}
                </form>

            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(auth(email, password, isSignUp))
    }
}

export default connect(null, mapDispatchToProps)(Auth);