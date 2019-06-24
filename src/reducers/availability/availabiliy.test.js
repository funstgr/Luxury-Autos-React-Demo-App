import availability from './index';
import { types } from '../../actions/types';
import testData from '../../../db.json';

const data = testData.availability;

describe('availability Reducer ADD_CAR_TO_CART', () => {
  it('tests the availability reducer type REQUEST_AVAILABILITY', () => {
    const availActionObj = { type: types.REQUEST_AVAILABILITY, payload: data };
    const availActionTestObj = {
      doneLoadingAvailability: true,
      data,
    };
    const state = [];
    expect(availability(state, availActionObj)).toEqual(availActionTestObj);
  });
});

describe('availability Reducer default state test', () => {
  it('tests the availability reducer for default state using test type TEST_TYPE', () => {
    const state = undefined;
    const initState = {};
    expect(availability(state, { type: types.TEST_TYPE })).toEqual(initState);
  });
});
