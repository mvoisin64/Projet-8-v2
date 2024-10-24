import React from 'react';
import './Banner.scss';
import { Link } from 'react-router-dom';

function Banner({ text, image }) {
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner" />
      <div className="banner-text">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
