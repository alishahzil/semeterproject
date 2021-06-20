
import { ADD_CART, REMOVE_CART } from './types';

export const addcart = (id,name,des,price,qunatity) => dispatch => {
  dispatch({
    type: ADD_CART,
    payload:{id,name,des,price,qunatity}
  });

};
export const removecart = (id) => dispatch => {
    dispatch({
      type: REMOVE_CART,
      payload:{id}
    });
  };
  