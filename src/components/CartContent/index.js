import React, { Component } from 'react';
import CartList from '../../containers/CartList';

class CartContent extends Component {
  render() {
    return (
        <div className="app-container">
            <CartList />
        </div>
    );
  }
}

export default CartContent;
