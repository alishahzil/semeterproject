import {combineReducers} from 'redux';
import Cart from './cart';
import Check from './Check';
import Auth from './auth';

export default combineReducers ({
    Cart,
    Check,
    Auth
});