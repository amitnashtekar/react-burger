import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userid) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userid
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = (error) => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
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
            let expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', res.data.localId);
            dispatch(authSuccess(res.data.idToken, res.data.localId));
        })
        .catch(error => {
            console.log(error);
            dispatch(authFail(error))
        })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return (dispatch) => {
        let token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        }
        let expirationDate  =  new Date(localStorage.getItem('expirationDate'));
        if (expirationDate > new Date()) {
            const userId  = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId))
        } else {
            dispatch(logout());
        }
        

    }
}