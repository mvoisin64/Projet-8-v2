import React from 'react';
import Header from '../../components/Header/Header.js';  
import Footer from '../../components/Footer/Footer.js'; 
import './Home.scss';

function Home() {
  return (
    <div className="home-page">
      <Header />

      {/* Banner Image */}
      <section className="banner">
        <img src="/path/to/banner-image.jpg" alt="Banner" />
      </section>

      {/* Product Details Section (you can fetch and display data here) */}
      <section className="product-details">
        <div className="red-square">
          {/* Placeholder for product details */}
          <p>Product details coming soon...</p>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default Home;
