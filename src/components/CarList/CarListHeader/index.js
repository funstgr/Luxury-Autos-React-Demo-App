import React from 'react';
import PropTypes from 'prop-types';

class CarListHeader extends React.PureComponent {
  render() {
    const { limit, dataLength } = this.props;
    const messageLimit = limit !== undefined ? limit : 0;
    const messagedataLength = dataLength !== undefined ? dataLength : 0;
    const message = `Showing ${messageLimit} of ${messagedataLength}`;
    return (<h5>{message}</h5>);
  }
}

CarListHeader.propTypes = {
  limit: PropTypes.number,
  dataLength: PropTypes.number,
};

export default CarListHeader;
