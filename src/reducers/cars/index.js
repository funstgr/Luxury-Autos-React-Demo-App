import { types } from '../../actions/types';

function cars(state = { data: [] }, action) {
  switch (action.type) {
    case types.REQUEST_CARS:
      return {
        ...state,
        data: action.payload,
        doneLoadingCars: true,
      };
    default:
      return state;
  }
}

export default cars;
