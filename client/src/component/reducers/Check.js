import {ADD_CHECK,REMOVE_CHECK} from '../actions/types';

const initialState = {
    gender:0,

};


function CheckReducer(state= initialState,action){
    const {type,payload} = action;
    switch(type){
        case ADD_CHECK  :
            return {state,payload}
        case REMOVE_CHECK:
           return {}
        default:
            return state;

    }
}

export default CheckReducer;