import React from 'react';
import PropTypes from 'prop-types';

class Model extends React.PureComponent {
  render() {
    const { data } = this.props;
    const carModel = data !== undefined ? data.model : 'testModel';

    return (
        <div className='model-container'>
          <p>Model: {carModel}</p>
        </div>
    );
  }
}

Model.propTypes = {
  data: PropTypes.object,
};

export default Model;
