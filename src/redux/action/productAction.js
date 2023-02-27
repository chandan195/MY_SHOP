import {ActionType} from '../constants/action-type'

export const setProduct=(products)=>{
    return{
        type:ActionType.SET_PRODUCT,    // set type of action  and take by productReducer
        payload:products,
    }

}

export const selectedProduct=(product)=>{
    return{
        type:ActionType.SELECTED_PRODUCT,
        payload:product,
    }

}