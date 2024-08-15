import React from 'react'

export default function CartCard( {product }) {
  return (
    <div className="cart-item">
          <img src={product?.image} alt="Product" className="cart-item-image" />
          <div className="cart-item-details">
            <h2>{product?.title}</h2>
            <p>Quantity: 1</p>
            <p>Price: ${product?.price?.toFixed(2)}</p>
          </div>
          <button className="remove-button">Remove</button>
        </div>
        
  )
}
