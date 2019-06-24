import { types } from '../../actions/types';

function sortMethod(state = { sort: 'make' }, action) {
  switch (action.type) {
    case types.SET_SORT_METHOD:
      return {
        ...state,
        sort: action.payload.property,
      };
    default:
      return state;
  }
}

export default sortMethod;
