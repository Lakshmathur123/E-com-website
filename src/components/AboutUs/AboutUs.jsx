import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="about-us-content">
        <div className="about-us-image">
          <img src="/public/team.png" alt="Our Team" />
        </div>
        <div className="about-us-text">
          <p>
            Welcome to Laksh's Shop! We are dedicated to providing you with the best quality products and customer service. Our team works tirelessly to ensure that your shopping experience is smooth, enjoyable, and fulfilling. Thank you for choosing us as your preferred shopping destination.
          </p>
          <p>
            Our mission is to offer a wide variety of products that cater to all your needs. From the latest fashion trends to essential home goods, we strive to bring you the best in every category. Our team is passionate about finding the most unique and high-quality items for you to enjoy.
          </p>
          <p>
            At Laksh's Shop, we value your feedback and are always looking for ways to improve. Feel free to contact us with any questions or suggestions. We are here to help and ensure that you have a wonderful experience with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
