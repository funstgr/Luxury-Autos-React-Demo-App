import { connect } from 'react-redux';
import CarInfo from '../../components/CarCard/CarInfo';

import {
  increment,
  decrement,
  addToCart,
  removeFromCart,
} from '../../actions/actions';

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  addToCart: car => dispatch(addToCart(car)),
  removeFromCart: carId => dispatch(removeFromCart(carId)),
});
const CarInfoContainer = connect(null, mapDispatchToProps)(CarInfo);

export default CarInfoContainer;
