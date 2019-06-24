import { connect } from 'react-redux';
import CartList from '../../components/CartList';

import {
  fetchCars,
  fetchAvailability,
  setSortMethod,
} from '../../actions/actions';

const mapStateToProps = (state) => {
  const { cart, availability } = state;
  return {
    cart,
    availability,
  };
};

const mapDispatchToProps = dispatch => ({
});

const CartListContainer = connect(mapStateToProps, mapDispatchToProps)(CartList);

export default CartListContainer;
