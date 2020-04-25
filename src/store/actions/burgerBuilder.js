import * as actionTypes from  './actionTypes';
import axios from '../../axios-orders';

export const addIngredients = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        ingredientName: name
    }
}

export const removeIngredients = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientName: name
    }
}

export const setIngredients = (ings) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ings
    }
}
export const failIngredients = () => {
    return {
        type: actionTypes.FAIL_INGREDIENTS
    }
}

export const initIngredients = () => {
    return (dispatch) => {
        return (action) =>  {
            axios.get('/ingredients.json')
        .then(res => {
            console.log(res);
            dispatch(setIngredients(res.data));
           
        })
        .catch(error => {
           dispatch(failIngredients()) 
        })

        }
    }

}
