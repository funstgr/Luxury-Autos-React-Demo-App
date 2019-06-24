import testData from '../../db.json';
import sort from '../../src/utils/sort/sort';

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

console.log(carDataByMake);

const carDataByName = {
  data: sortCarDataByName,
  doneLoadingCars: true,
};

it('loads', () => {
  cy.visit('/');
});

it('has expected default states on load', () => {
  cy.visit('/');

  const getCarsState = async win => win.store.getState().cars;
  cy.window().then(getCarsState).should('deep.equal', { data: [] });

  const getCounterState = async win => win.store.getState().counter;
  cy.window().pipe(getCounterState).should('deep.equal', 0);

  const getCartState = async win => win.store.getState().cart;
  cy.window().pipe(getCartState).should('deep.equal', { carsInCart: [] });

  const getAvailabilityState = async win => win.store.getState().availability;
  cy.window().then(getAvailabilityState).should('deep.equal', {});
});

it('has expected default state data after data loads using pipe to ensure cypress waits for the date', () => {
  cy.visit('/');

  const getCounterState = async win => win.store.getState().counter;
  cy.window().pipe(getCounterState).should('deep.equal', 0);

  const getAvailabilityState = async win => win.store.getState().availability;
  cy.window().pipe(getAvailabilityState).should('deep.equal', availabilityData);

  const getCarsState = async win => win.store.getState().cars;
  cy.window().pipe(getCarsState).should('deep.equal', carDataByMake);
});

it('has new sorted cars store when dropdown select value is updated', () => {
  cy.visit('/');

  const getCarsState = async win => win.store.getState().cars;
  cy.window().pipe(getCarsState).should('deep.equal', carDataByMake);
});

it('has correct data in cart store when car is added to cart', () => {
  cy.visit('/');

  const getCarsState = async win => win.store.getState().cars;
  cy.window().pipe(getCarsState).should('deep.equal', carDataByMake);
});

it('has correct data in cart store when car is added then removed from cart', () => {
  cy.visit('/');

  const getCarsState = async win => win.store.getState().cars;
  cy.window().pipe(getCarsState).should('deep.equal', carDataByMake);
});

it('has correct data in cart store when two cars are added then one is removed from cart', () => {
  cy.visit('/');

  const getCarsState = async win => win.store.getState().cars;
  cy.window().pipe(getCarsState).should('deep.equal', carDataByMake);
});

it('has correct data in cart store when no cars are in the cart and one is attempted to be removed from cart', () => {
  cy.visit('/');

  const getCarsState = async win => win.store.getState().cars;
  cy.window().pipe(getCarsState).should('deep.equal', carDataByMake);
});

// eslint-disable-next-line max-len
it('has correct data in cart store when a cars is added to the cart and the same car is attempted to be added again', () => {
  cy.visit('/');

  const getCarsState = async win => win.store.getState().cars;
  cy.window().pipe(getCarsState).should('deep.equal', carDataByMake);
});
