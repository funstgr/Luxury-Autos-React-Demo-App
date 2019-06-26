import axios from 'axios';
import { types } from './types';

export const setSortMethod = property => (dispatch) => {
  dispatch({
    type: types.SET_SORT_METHOD,
    payload: {
      property,
    },
  });
};

export const fetchCars = () => (dispatch) => {
  dispatch(getCars());
};

const getCars = () => async (dispatch) => {
  await axios.get('http://localhost:3001/api/cars')
    .then((res) => {
      dispatch({
        type: types.REQUEST_CARS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchAvailability = () => (dispatch) => {
  dispatch(getAvailability());
};

const getAvailability = () => async (dispatch) => {
  await axios.get('http://localhost:3001/api/availability')
    .then((res) => {
      dispatch({
        type: types.REQUEST_AVAILABILITY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const increment = () => dispatch => (dispatch({ type: types.INCREMENT }));

export const decrement = () => dispatch => (dispatch({ type: types.DECREMENT }));

export const addToCart = car => (dispatch) => {
  dispatch({
    type: types.ADD_CAR_TO_CART,
    car,
  });
};

export const removeFromCart = carId => (dispatch) => {
  dispatch({
    type: types.REMOVE_CAR_FROM_CART,
    carId,
  });
};
