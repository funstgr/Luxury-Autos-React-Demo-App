import React from 'react';
import PropTypes from 'prop-types';

class Availability extends React.PureComponent {
  render() {
    const { data, availability } = this.props;
    const testDataExists = (typeof data !== 'undefined' && typeof availability !== 'undefined');
    const getAvailability = testDataExists ? availability[data.id] : 'testAvailability';

    return (
        <div className='make-container'>
          <p>Model: {getAvailability}</p>
        </div>
    );
  }
}

Availability.propTypes = {
  data: PropTypes.object,
  availability: PropTypes.object,
};

export default Availability;
