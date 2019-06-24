import counter from './index';
import { types } from '../../actions/types';

describe('Counter Reducer', () => {
  it('tests the counter reducer type INCREMENT', () => {
    expect(counter(0, { type: types.INCREMENT })).toEqual(1);
    expect(counter(1, { type: types.INCREMENT })).toEqual(2);
  });

  it('tests the counter reducer type DECREMENT', () => {
    expect(counter(2, { type: types.DECREMENT })).toEqual(1);
    expect(counter(1, { type: types.DECREMENT })).toEqual(0);
  });

  it('tests counter reducer for no change using action types.TEST_TYPE', () => {
    expect(counter(1, { type: types.TEST_TYPE })).toEqual(1);
  });

  it('tests counter reducer for no change using action types.TEST_TYPE', () => {
    expect(counter(0, { type: types.TEST_TYPE })).toEqual(0);
  });
});

describe('Counter Reducer default state test', () => {
  it('tests the Counter reducer for default state using test type TEST_TYPE', () => {
    const state = undefined;
    expect(counter(state, { type: types.TEST_TYPE })).toEqual(0);
  });
});
