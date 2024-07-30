import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <ul className="categories-list">
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${category}`} className="category-link">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
