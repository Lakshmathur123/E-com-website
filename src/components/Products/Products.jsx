// components/Products.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCart/ProductCart';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleAddToCart = (product) => {
    // Add your add to cart logic here
    console.log(`Added product ${product.title} to cart.`);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <section className="products">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </section>
  );
};

export default Products;
