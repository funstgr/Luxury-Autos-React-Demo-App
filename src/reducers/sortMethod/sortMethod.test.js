import sort from './index';
import { types } from '../../actions/types';

describe('sortMethod Reducer SET_SORT_METHOD', () => {
  it('tests the sortMethod reducer type SET_SORT_METHOD', () => {
    const property = { property: 'name' };
    const testObj = { sort: 'name' };
    expect(sort({}, { type: types.SET_SORT_METHOD, payload: property })).toEqual(testObj);
  });
});

describe('sortMethod Reducer SET_SORT_METHOD', () => {
  it('tests the sortMethod reducer type SET_SORT_METHOD', () => {
    const property = { property: 'make' };
    const testObj = { sort: 'make' };
    expect(sort({}, { type: types.SET_SORT_METHOD, payload: property })).toEqual(testObj);
  });
});

describe('sortMethod Reducer default state test', () => {
  it('tests the sortMethod reducer for default state using test type TEST_TYPE', () => {
    const testObj = { sort: 'make' };
    const state = undefined;
    expect(sort(state, { type: types.TEST_TYPE })).toEqual(testObj);
  });
});
