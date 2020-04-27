import * as actionTypes from './actionTypes';
 import axios from '../../axios-orders';



export const purchaseOrderStart = () => {
    return {
        type: actionTypes.PURCHASE_ORDER_START
    }
}

export const purchaseOrderSuccess = (id,orderData) => {
    return {
        type: actionTypes.PURCHASE_ORDER_SUCCESS,
        orderId: id,
        order: orderData
    }
}

export const purchaseOrderFail = (error) => {
    return {
        type: actionTypes.PURCHASE_ORDER_SUCCESS,
        error: error
    }
}

export const initPurchaseOrder = (order, token) => {
    return (dispatch) => {
        dispatch(purchaseOrderStart());        
         axios.post('/order.json?auth=' + token, order)
        .then(response => {
            console.log(response);
            dispatch(purchaseOrderSuccess(response.data.name,order));
        })
        .catch(error => {
            console.log(error);
            dispatch(purchaseOrderFail())
        });

        }
    }
      
    
