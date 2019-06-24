import { types } from '../../actions/types';

function counter(state = 0, action) {
  if (action.type === types.INCREMENT) {
    return state + 1;
  }
  if (action.type === types.DECREMENT) {
    return state - 1;
  }
  return state;
}

export default counter;
