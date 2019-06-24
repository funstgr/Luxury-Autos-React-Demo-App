import { connect } from 'react-redux';
import SelectSortMethod from '../../components/SelectSortMethod';

import {
  setSortMethod,
} from '../../actions/actions';

const mapStateToProps = (state) => {
  const { sortMethod } = state;
  const { sort } = sortMethod;
  return {
    sort,
  };
};

const mapDispatchToProps = dispatch => ({
  setSortMethod: val => dispatch(setSortMethod(val)),
});

const SelectSortMethodContainer = connect(mapStateToProps, mapDispatchToProps)(SelectSortMethod);

export default SelectSortMethodContainer;
