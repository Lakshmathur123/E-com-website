
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <section className="products">
      {products.map((product) => (
        <Link
          to={`/product/${product.title}?id=${product.id}`}
          key={product.id}
          className="product-link"
        >
          <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Products;
