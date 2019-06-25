import testData from '../../db.json';
import sort from '../../src/utils/sort/sort';
import { types } from '../../src/actions/types';

import {
  removeFromCart,
  addToCart,
  fetchAvailability,
  fetchCars,
  setSortMethod,
} from '../../src/actions/actions';

const { availability } = testData;
const availabilityData = {
  data: availability,
  doneLoadingAvailability: true,
};
const { cars } = testData;
const defaultSort = 'make';
const sortCarDataByMake = sort(defaultSort, cars);
const sortCarDataByName = sort('name', cars);
const carDataByMake = {
  data: sortCarDataByMake,
  doneLoadingCars: true,
};

const carDataByName = {
  data: sortCarDataByName,
  doneLoadingCars: true,
};

it('loads', () => {
  cy.visit('/');
});

let description = 'has expected default states on load';

it(description, () => {
  cy.visit('/');

  const getCarsState = async win => win.store.getState().cars;
  cy.window().then(getCarsState).should('deep.equal', { data: [] });

  const getCounterState = async win => win.store.getState().counter;
  cy.window().then(getCounterState).should('deep.equal', 0);

  const getCartState = async win => win.store.getState().cart;
  cy.window().then(getCartState).should('deep.equal', { carsInCart: [] });

  const getAvailabilityState = async win => win.store.getState().availability;
  cy.window().then(getAvailabilityState).should('deep.equal', {});
});

description = 'tests for default state data after data loads using pipe to '
            + 'ensure cypress waits for the data';

it(description, () => {
  cy.visit('/');

  const getCounterState = async win => win.store.getState().counter;
  cy.window().pipe(getCounterState).should('deep.equal', 0);

  const getAvailabilityState = async win => win.store.getState().availability;
  cy.window().pipe(getAvailabilityState).should('deep.equal', availabilityData);

  const getCarsState = async win => win.store.getState().cars;
  cy.window().pipe(getCarsState).should('deep.equal', carDataByMake);
});

description = 'test availability fetchAvailability action returned state';

it(description, () => {
  cy.visit('/');

  cy.window().its('store')
    .invoke('dispatch', { type: types.REQUEST_AVAILABILITY });

  const getAvailabilityState = async win => win.store.getState().availability;
  cy.window().pipe(getAvailabilityState).should('deep.equal', availabilityData);
});

description = 'tests new sorted cars store when dropdown select value name is selected';
it(description, () => {
  cy.visit('/');
  cy.get('#sortSelect').select('name').should('have.value', types.SORT_BY_NAME);

  const getCarsState = async win => win.store.getState().cars;
  cy.window().pipe(getCarsState).should('deep.equal', carDataByName);
});

description = 'tests new sorted cars store when dropdown select value make is selected';
it(description, () => {
  cy.visit('/');
  cy.get('#sortSelect').select('make').should('have.value', types.SORT_BY_MAKE);

  const getCarsState = async win => win.store.getState().cars;
  cy.window().pipe(getCarsState).should('deep.equal', carDataByMake);
});

description = 'has correct data in cart store when car is added then removed '
            + 'from cart using addToCart and remove from cart actions';
it(description, () => {
  cy.visit('/');

  const getCartState = async win => win.store.getState().cart;
  cy.window().pipe(getCartState).should('deep.equal', { carsInCart: [] });

  cy.window().its('store')
    .invoke('dispatch', { type: types.ADD_CAR_TO_CART, car: cars[11] });

  const getCartState2 = async win => win.store.getState().cart;
  cy.window().pipe(getCartState2).should('deep.equal', { carsInCart: [cars[11]] });
  const carId = 2;
  cy.window().its('store')
    .invoke('dispatch', { type: types.REMOVE_CAR_FROM_CART, carId });

  const getCartState3 = async win => win.store.getState().cart;
  cy.window().pipe(getCartState3).should('deep.equal', { carsInCart: [] });
});

description = 'has correct data in cart store when two cars are added then one is removed from cart';
it(description, () => {
  cy.visit('/');

  const getCartState = async win => win.store.getState().cart;
  cy.window().pipe(getCartState).should('deep.equal', { carsInCart: [] });

  cy.window().its('store')
    .invoke('dispatch', { type: types.ADD_CAR_TO_CART, car: cars[11] });
  cy.window().its('store')
    .invoke('dispatch', { type: types.ADD_CAR_TO_CART, car: cars[10] });


  const getCartState2 = async win => win.store.getState().cart;
  cy.window().pipe(getCartState2).should('deep.equal', { carsInCart: [cars[11], cars[10]] });
  const carId = 2;
  cy.window().its('store')
    .invoke('dispatch', { type: types.REMOVE_CAR_FROM_CART, carId });

  const getCartState3 = async win => win.store.getState().cart;
  cy.window().pipe(getCartState3).should('deep.equal', { carsInCart: [cars[10]] });
});

description = 'has correct data in cart store when no cars are in the cart and one is attempted '
            + 'to be removed from cart';

it(description, () => {
  cy.visit('/');

  const getCartState = async win => win.store.getState().cart;
  cy.window().pipe(getCartState).should('deep.equal', { carsInCart: [] });

  const carId = 2;
  cy.window().its('store')
    .invoke('dispatch', { type: types.REMOVE_CAR_FROM_CART, carId });

  const getCartState2 = async win => win.store.getState().cart;
  cy.window().pipe(getCartState2).should('deep.equal', { carsInCart: [] });
});

description = 'has correct data in cart store when a cars is added to the cart and the same car '
            + 'is attempted to be added again';
it(description, () => {
  cy.visit('/');

  const getCartState = async win => win.store.getState().cart;
  cy.window().pipe(getCartState).should('deep.equal', { carsInCart: [] });

  cy.window().its('store')
    .invoke('dispatch', { type: types.ADD_CAR_TO_CART, car: cars[11] });

  const getCartState2 = async win => win.store.getState().cart;
  cy.window().pipe(getCartState2).should('deep.equal', { carsInCart: [cars[11]] });

  cy.window().its('store')
    .invoke('dispatch', { type: types.ADD_CAR_TO_CART, car: cars[11] });

  const getCartState3 = async win => win.store.getState().cart;
  cy.window().pipe(getCartState3).should('deep.equal', { carsInCart: [cars[11]] });
});
