
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCartClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img src={product.image} alt={product.title} className="product-image" />
      <h2>{product.title}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button 
        className="add-to-cart" 
        onClick={handleAddToCartClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
