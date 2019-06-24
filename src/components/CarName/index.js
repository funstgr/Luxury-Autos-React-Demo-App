import React from 'react';
import PropTypes from 'prop-types';

class CarName extends React.PureComponent {
  render() {
    const { data } = this.props;
    const carName = data !== undefined ? data.name : 'testName';

    return (
        <h4>{carName}</h4>
    );
  }
}

CarName.propTypes = {
  data: PropTypes.object,
};

export default CarName;
