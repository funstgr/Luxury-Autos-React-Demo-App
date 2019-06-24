import React, { Component } from 'react';
import { types } from '../../actions/types';

import SelectorLabel from './SelectorLabel';
import SelectSortMethod from '../../containers/SelectSortMethod';
import CarList from '../../containers/CarList';

class InnerContent extends Component {
  render() {
    return (
        <div>
            <SelectorLabel />
            <SelectSortMethod >
                <option value={types.SORT_BY_MAKE}>Make</option>
                <option value={types.SORT_BY_NAME}>Name</option>
            </SelectSortMethod>
            <CarList/>
        </div>
    );
  }
}

export default InnerContent;
