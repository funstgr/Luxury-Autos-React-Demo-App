import { types } from '../../actions/types';

function availability(state = {}, action) {
  switch (action.type) {
    case types.REQUEST_AVAILABILITY:
      return {
        ...state,
        data: action.payload,
        doneLoadingAvailability: true,
      };
    default:
      return state;
  }
}

export default availability;
