import React from 'react';
import './Home.scss';
import Header from '../../components/Header/Header.js';  
import Footer from '../../components/Footer/Footer.js'; 
import Banner from '../../components/Banner/Banner.js';
import backgroundhome from '../../img/backgroundhome.png';



function Home() {
  return (
    <div className="scene">
      <Header />

      {/* Banner Image */}
      <Banner text="Chez vous, partout et ailleurs" image={backgroundhome}/>


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
