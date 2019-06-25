import React from 'react';
import PropTypes from 'prop-types';

class SelectSortMethod extends React.Component {
  handleChange = (val) => {
    const { setSortMethod } = this.props;
    setSortMethod(val);
  }

  render() {
    const { children } = this.props;
    return (
      <select id='sortSelect' onChange={event => this.handleChange(event.target.value)}>
        {children}
      </select>
    );
  }
}

SelectSortMethod.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  setSortMethod: PropTypes.func,
};


export default SelectSortMethod;
