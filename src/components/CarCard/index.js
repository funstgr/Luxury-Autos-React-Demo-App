import React from 'react';
import PropTypes from 'prop-types';
import CarImage from './CarImage';
import CarInfo from '../../containers/CarInfo';
import './carCard.css';

class CarCard extends React.PureComponent {
  increment = () => {
    const { increment } = this.props;
    increment();
  }

  decrement = () => {
    const { decrement } = this.props;
    decrement();
  }

  testDataExists = () => {
    const { data, availability } = this.props;
    return typeof data !== 'undefined' && typeof availability !== 'undefined';
  }

  isUnavailable = () => {
    const { data, availability } = this.props;
    const testDataExists = this.testDataExists();
    let className = 'car';
    // if testDataExists returns car or car unavailable
    if (testDataExists) {
      className = (`car${availability[data.id] === 'Unavailable' ? ' unavailable' : ''}`);
    }
    return className;
  }

  render() {
    const { data, availability, isInCart } = this.props;
    const isUnavailable = this.isUnavailable();

    return (
      <li className={isUnavailable}>
        {<CarImage data={data} availability={availability}/>}
        <div className='car-info-container'>
          {<CarInfo data={data} availability={availability} isInCart={isInCart}/>}
        </div>
      </li>
    );
  }
}

CarCard.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  isInCart: PropTypes.bool,
};

export default CarCard;
