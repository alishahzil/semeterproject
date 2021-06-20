import {LOGIN_SUCCESS,LOGOUT} from '../actions/types';


const initialState = {
    isAuthenticated: true,
  };
  
function AuthReducer(state = initialState, action) {
    const  {type,payload}= action;
  
    switch (type) {
      case LOGIN_SUCCESS:
        return {...state,isAuthenticated:true};
      case LOGOUT:
         return {...state,isAuthenticated:false};
         default:
           return state;
    }
}

export default AuthReducer;