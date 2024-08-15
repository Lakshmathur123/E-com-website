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



  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <section className="products">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product}
        />
      ))}
    </section>
  );
};

export default Products;
