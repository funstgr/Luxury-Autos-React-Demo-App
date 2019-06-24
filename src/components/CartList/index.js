import React from 'react';
import PropTypes from 'prop-types';
import CarCard from '../CarCard';
import isInCart from '../utils/cart';

class CartList extends React.Component {
  getCarCardList = () => {
    const { availability, cart } = this.props;
    let carList = [];
    if (cart.carsInCart) {
      carList = cart.carsInCart;
      carList = carList.map(car => <CarCard key={car.id} data={car}
                                            availability={availability.data}
                                            isInCart={isInCart(car.id, cart)}
                                   />);
    }
    return carList;
  };

  render() {
    const { cart } = this.props;
    const cartContent = cart.carsInCart.length > 0 ? this.getCarCardList() : 'Cart is Empty';
    return (
        <div className="app-container">
            <ul className="car-list">
              {cartContent}
            </ul>
        </div>
    );
  }
}

CartList.propTypes = {
  cart: PropTypes.object,
  availability: PropTypes.object,
};

export default CartList;
