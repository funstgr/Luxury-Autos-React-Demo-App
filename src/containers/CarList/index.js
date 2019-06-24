import { connect } from 'react-redux';
import CarList from '../../components/CarList';

import {
  fetchCars,
  fetchAvailability,
  setSortMethod,
} from '../../actions/actions';

const mapStateToProps = (state) => {
  const {
    cars,
    availability,
    sortMethod,
    cart,
  } = state;
  const { doneLoadingCars } = cars;
  const { doneLoadingAvailability } = availability;
  const { sort } = sortMethod;
  return {
    cars,
    cart,
    availability,
    sort,
    doneLoadingAvailability,
    doneLoadingCars,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAvailability: () => { dispatch(fetchAvailability()); },
  fetchCars: () => { dispatch(fetchCars()); },
  setSortMethod: () => { dispatch(setSortMethod()); },
});

const CarListContainer = connect(mapStateToProps, mapDispatchToProps)(CarList);

export default CarListContainer;
