import * as actionType from '../actions/actionTypes';

const initialState = {
    loading: false,
    orders: []
}
 const reducer = (state = initialState, action) => {
    switch(action.type) {

        case actionType.PURCHASE_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionType.PURCHASE_ORDER_START:
        return {
            ...state,
            loading: true
        }
        case actionType.PURCHASE_ORDER_SUCCESS:
            const newOrder = {
                ...action.order,
                id: action.orderId
            }
        return {
            ...state,
            orders: state.orders.concat(newOrder),
            loading: false
        }
        default: return state;
    }
}

export default reducer;