import React from 'react';
import PropTypes from 'prop-types';
import CarCard from '../CarCard';
import CarListHeader from './CarListHeader';
import sortArray from '../../utils/sort/sort';
import './index.css';
import isInCart from '../utils/cart';

class CarList extends React.Component {
  componentDidMount() {
    const { fetchCars, fetchAvailability } = this.props;
    fetchAvailability();
    fetchCars();
  }

  getCarCardList = () => {
    const {
      cars, availability, cart, sort,
    } = this.props;
    let carList = [];
    if (cars.data) {
      carList = sortArray(sort, cars.data);
      carList = carList.map(car => <CarCard key={car.id} data={car}
                                            availability={availability.data}
                                            isInCart={isInCart(car.id, cart)}
                                   />);
    }
    return carList;
  };

  render() {
    const {
      cars, doneLoadingCars, doneLoadingAvailability,
    } = this.props;

    const getLimit = cars !== undefined && cars.data !== undefined ? Math.min(25, cars.data.length) : 0;
    const getDataLength = cars !== undefined && cars.data !== undefined ? cars.data.length : 0;

    return (
      <div>
        <CarListHeader limit={getLimit} dataLength={getDataLength}/>
        <ul className="car-list">
          {doneLoadingAvailability && doneLoadingCars
          && this.getCarCardList()}
        </ul>
      </div>
    );
  }
}

CarList.propTypes = {
  cars: PropTypes.object,
  cart: PropTypes.object,
  availability: PropTypes.object,
  sortMethod: PropTypes.string,
  fetchCars: PropTypes.func,
  fetchAvailability: PropTypes.func,
  doneLoadingAvailability: PropTypes.bool,
  doneLoadingCars: PropTypes.bool,
};

export default CarList;
