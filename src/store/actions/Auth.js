import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignUp) => {
    return (dispatch) => {
        dispatch(authStart());
        let authObj = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxgwq7h8qx3QQwOXsuR-vHJYS1UPueeqg';
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxgwq7h8qx3QQwOXsuR-vHJYS1UPueeqg'
        }
        axios.post(url, authObj)
        .then(res => {
            console.log(res.data);
            dispatch(authSuccess(res.data));
        })
        .catch(error => {
            console.log(error);
            dispatch(authFail(error))
        })
    }
}