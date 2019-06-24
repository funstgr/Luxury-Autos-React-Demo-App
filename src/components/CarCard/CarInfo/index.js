import React from 'react';
import PropTypes from 'prop-types';
import Ratings from './Ratings';
import CarName from '../../CarName';
import Make from '../../Make';
import Model from '../../Model';
import Availability from '../../Availability';
import Button from '../../Button';

class CarInfo extends React.PureComponent {
  addToCart = () => {
    const { data, addToCart } = this.props;
    addToCart(data);
  };

  removeFromCart = () => {
    const { data, removeFromCart } = this.props;
    removeFromCart(data.id);
  };

  render() {
    const { data, availability, isInCart } = this.props;

    const renderAddToCart = () => {
      let inDealership = false;
      if (data) {
        inDealership = availability[data.id] === 'In Dealership';
      }
      return inDealership;
    };

    const testDataExists = (typeof data !== 'undefined' && typeof availability !== 'undefined');
    const onClick = renderAddToCart && isInCart ? this.removeFromCart : this.addToCart;
    const getLabel = renderAddToCart && isInCart ? 'Remove Car From Cart' : 'Add Car to Cart';
    const getAddOrRemoveCartButton = testDataExists && renderAddToCart()
      && <Button onClick={onClick} className='buy-button' label={getLabel} />;

    return (
        <div className='car-container'>
          <CarName data={data} />
          <Make data={data} />
          <Model data={data} />
          <Availability data={data} availability={availability}/>
          <Ratings data={data} />
          <p className='addToCart_btn'>{getAddOrRemoveCartButton }</p>
        </div>
    );
  }
}

CarInfo.propTypes = {
  data: PropTypes.object,
  availability: PropTypes.object,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};

export default CarInfo;
