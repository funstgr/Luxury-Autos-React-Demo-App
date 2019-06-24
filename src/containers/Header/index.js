import { connect } from 'react-redux';
import Header from '../../components/Header';

const mapStateToProps = (state) => {
  const { cart } = state;
  return {
    cart,
  };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
