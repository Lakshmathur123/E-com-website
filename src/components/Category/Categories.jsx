import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="categories-container">
      <h1>Categories</h1>
      <div className="categories-grid">
        {categories.map(category => (
          <Link key={category} to={`/category/${category}`} className="category-card">
            <div className="category-content">
              <p>{category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
