import { types } from '../../actions/types';

const removeCarFromCart = (state, carId) => {
  const cars = state.carsInCart;
  const index = cars.findIndex(car => car.id === carId);
  let newCars = cars;
  if (index !== -1) {
    newCars = [...cars.slice(0, index), ...cars.slice(index + 1)];
  }
  return newCars;
};

const addCarToCart = (state, car) => {
  let cars = state.carsInCart;
  const vehId = car.id;
  const index = cars.findIndex(veh => veh.id === vehId);
  if (index === -1) {
    cars = [...cars, car];
  }
  return cars;
};

function cart(state = { carsInCart: [] }, action) {
  switch (action.type) {
    case types.ADD_CAR_TO_CART:
      return {
        ...state,
        carsInCart: addCarToCart(state, action.car),
      };
    case types.REMOVE_CAR_FROM_CART:
      return {
        ...state,
        carsInCart: removeCarFromCart(state, action.carId),
      };
    default:
      return state;
  }
}

export default cart;
