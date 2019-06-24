import React from 'react';
import PropTypes from 'prop-types';

class Make extends React.PureComponent {
  render() {
    const { data } = this.props;
    const carMake = data !== undefined ? data.make : 'testMake';

    return (
        <div className='make-container'>
          <p>Make: {carMake}</p>
        </div>
    );
  }
}

Make.propTypes = {
  data: PropTypes.object,
};

export default Make;
