import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCartClick = (event, product) => {
    event.stopPropagation();
    console.log(`Added product ${product.title} to cart.`);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  const renderProductCard = (product) => (
    <div 
      key={product.id} 
      className="product-card" 
      onClick={() => handleCardClick(product.id)}
    >
      <img src={product.image} alt={product.title} className="product-image" />
      <h2>{product.title}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button 
        className="add-to-cart" 
        onClick={(event) => handleAddToCartClick(event, product)}
      >
        Add to Cart
      </button>
    </div>
  );

  return (
    <section className="products">
      {products.map(renderProductCard)}
    </section>
  );
};

export default Products;
