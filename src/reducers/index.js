import { combineReducers } from 'redux';
import cars from './cars';
import availability from './availability';
import sortMethod from './sortMethod';
import counter from './counter';
import cart from './cart';

export default combineReducers({
  cars,
  sortMethod,
  availability,
  counter,
  cart,
});
