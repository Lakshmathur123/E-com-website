import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CategoryItems = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="category-page">
      <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>
      <section className="products">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-link">
            <div className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default CategoryItems;

