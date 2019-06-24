import cart from './index';
import { types } from '../../actions/types';
import testData from '../../../db.json';

const data = testData.cars;

describe('Cart Reducer ADD_CAR_TO_CART', () => {
  it('tests the cart reducer type ADD_CAR_TO_CART', () => {
    const car = { id: 1, name: 'Audi' };
    const cars = [];
    cars.push(car);
    const testCart = { carsInCart: cars };
    expect(cart({ carsInCart: [] }, { type: types.ADD_CAR_TO_CART, car })).toEqual(testCart);
  });
});

describe('Cart Reducer REMOVE_CAR_FROM_CART', () => {
  it('tests the cart reducer type REMOVE_CAR_FROM_CART', () => {
    const car1 = { id: 1, name: 'Audi' };
    const car2 = { id: 2, name: 'Mercedes' };
    const cars = [];
    cars.push(car1);
    const testCart1 = { carsInCart: cars };
    cars.push(car2);
    const testCart2 = { carsInCart: cars };
    expect(cart(testCart2, { type: types.REMOVE_CAR_FROM_CART, car: 2 })).toEqual(testCart1);
  });
});

describe('Cart Reducer REMOVE_CAR_FROM_CART with db.json data', () => {
  it('tests the cart reducer type REMOVE_CAR_FROM_CART using db.json data', () => {
    const testCart1 = { carsInCart: data.slice(1) };
    const testCart2 = { carsInCart: data };
    expect(cart(testCart2, { type: types.REMOVE_CAR_FROM_CART, carId: 1 })).toEqual(testCart1);
  });
});

describe('Cart Reducer ADD_CAR_TO_CART with db.json data', () => {
  it('tests the cart reducer type ADD_CAR_TO_CART using db.json data', () => {
    const temp = data;
    // remove last item from array to be added back in reducer and testCart2
    const car = { carsInCart: temp.pop() };
    const testCart = { carsInCart: temp };
    const testCart2 = { carsInCart: [...temp, car] };
    expect(cart(testCart, { type: types.ADD_CAR_TO_CART, car })).toEqual(testCart2);
  });
});

describe('Cart Reducer default state test', () => {
  it('tests the Cart reducer for default state using test type TEST_TYPE', () => {
    const state = undefined;
    const initState = { carsInCart: [] };
    expect(cart(state, { type: types.TEST_TYPE })).toEqual(initState);
  });
});
