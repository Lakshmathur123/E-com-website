import * as React from 'react';

const Cart = () => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        <div className="cart-item">
          <img src="/src/components/images/product.jpeg" alt="Product" className="cart-item-image" />
          <div className="cart-item-details">
            <h2>Wrist Watch</h2>
            <p>Quantity: 1</p>
            <p>Price: $100</p>
          </div>
          <button className="remove-button">Remove</button>
        </div>
      </div>
      <div className="cart-summary">
        <h2>Summary</h2>
        <p>Total Items: 1</p>
        <p>Total Price: $100</p>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
