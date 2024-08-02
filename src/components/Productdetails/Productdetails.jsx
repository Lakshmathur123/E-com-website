import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchOtherProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setOtherProducts(data.filter(p => p.id !== parseInt(productId)));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProduct();
    fetchOtherProducts();
  }, [productId]);

  const handleAddToCart = (product) => {
    console.log(`Added product ${product.title} to cart.`);
  };

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

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details-page">
      <div className="product-details">
        <div className="product-image-section">
          <img src={product.image} alt={product.title} className="product-details-image" />
        </div>
        <div className="product-info-section">
          <h1>{product.title}</h1>
          <p className="product-details-description">{product.description}</p>
          <p className="product-details-price">${product.price}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="other-products-section">
        <h2>Other Products</h2>
        <div className="other-products">
          {otherProducts.map(renderProductCard)}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
