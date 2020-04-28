import * as actions from '../actions/actionTypes';
const initialState = {
    ingredients: null,
    error: false,
    totalPrice: 4,
    building: false
}

const INGREDIENT_PRICES = {
    salad: 0.4,
    meat: 1.3,
    cheese: 0.8,
    bacon: 1.1
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD_INGREDIENTS: 
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
            building: true
        }
        case actions.REMOVE_INGREDIENTS: 
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1                
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
            building: true

        }
        case actions.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients,
                error: false,
                building: false
            }
        case actions.FAIL_INGREDIENTS:
        return {
            ...state,            
            error: true
        }
        default: return state
    }
}

export default reducer;