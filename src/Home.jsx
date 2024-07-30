
import React from 'react';
import Products from './components/products';
import Header from './components/header';

const Home = () => {
  return (
    <div className="home-container">
        
        <Header />
      <Products />
    </div>
  );
};

export default Home;
