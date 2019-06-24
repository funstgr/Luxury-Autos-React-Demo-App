import cars from './index';
import { types } from '../../actions/types';
import testData from '../../../db.json';

const data = testData.cars;
// console.log(data);

describe('Cars Reducer ADD_CAR_TO_CART', () => {
  it('tests the availability reducer type REQUEST_CARS', () => {
    const carsActionObj = { type: types.REQUEST_CARS, payload: data };
    const carsActionTestObj = {
      doneLoadingCars: true,
      data,
    };
    const state = [];
    expect(cars(state, carsActionObj)).toEqual(carsActionTestObj);
  });
});

describe('Cars Reducer default state test', () => {
  it('tests the Cars reducer for default state using test type TEST_TYPE', () => {
    const state = undefined;
    const initState = { data: [] };
    expect(cars(state, { type: types.TEST_TYPE })).toEqual(initState);
  });
});
