/* reused code to return a boolean if car is in cart */
const isInCart = (id, cart) => {
  const items = cart.carsInCart;
  let inCart = false;
  for (let i = 0; i < items.length; ++i) {
    if (items[i].id === id) {
      inCart = true;
      break;
    }
  }
  return inCart;
};

export default isInCart;
