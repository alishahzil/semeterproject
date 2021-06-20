import {ADD_CART,REMOVE_CART} from '../actions/types';

const initialState = [
];


function CartReducer(state= initialState,action){
    const {type,payload} = action;
    switch(type){
        case ADD_CART :
            return [...state,payload]
        case REMOVE_CART:
            return state.filter((alert)=> alert.id !== payload);
        default:
            return state;

    }
}

export default CartReducer;