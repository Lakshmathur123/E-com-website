import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = ['jewelery', 'electronics', "men's clothing", "women's clothing"];

  return (
    <div className="categories-page">
      <h1>Categories</h1>
      <div className="categories-list">
        {categories.map(category => (
          <Link key={category} to={`/category/${category}`} className="category-link">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
