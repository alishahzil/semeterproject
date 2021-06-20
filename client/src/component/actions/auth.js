import { LOGIN_SUCCESS, LOGOUT } from './types';

export const Ownerlogin = () => dispatch => {
  dispatch({
    type: LOGIN_SUCCESS,
    
  });

};
export const Ownerlogout = () => dispatch => {
    dispatch({
      type: LOGOUT,
     
    });
  };
  