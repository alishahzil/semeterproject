import { ADD_CHECK, REMOVE_CHECK } from './types';

export const addcheck = (gender) => dispatch => {
  dispatch({
    type: ADD_CHECK,
    payload:{gender}
  });

};
export const removecheck = () => dispatch => {
    dispatch({
      type: REMOVE_CHECK,
    });
  
 };