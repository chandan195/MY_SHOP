// reducer always take initials state of action 
import {ActionType} from '../constants/action-type'
const initialState={
    product:[],

};

export const productReducer =(state=initialState,{type,payload})=>{
switch (type) {
    case ActionType.SET_PRODUCT:
         return {...state,product:payload};
        // return state;
    default:
        return state;
}
}

export const selectedProductReducer =(state={},{type,payload})=>{
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
             return {...state,...payload};
            // return state;
        default:
            return state;
    }
    }