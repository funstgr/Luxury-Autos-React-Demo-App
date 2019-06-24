import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

class Header extends React.PureComponent {
  getItems = (cart) => {
    let items = 0;
    if (cart && cart.carsInCart) {
      items = cart.carsInCart.length;
    }
    return items;
  }

  render() {
    const { cart } = this.props;
    const cartText = `Cart Items(${this.getItems(cart)})`;
    return (
      <header>
        <Link to='/' className='home_link'><h1>LuxuryAutos.ca</h1></Link>
        <Link to='/cart' className='cart_link'><div className="cart">{cartText}</div></Link>
      </header>
    );
  }
}

Header.propTypes = {
  cart: PropTypes.object,
};

export default Header;
