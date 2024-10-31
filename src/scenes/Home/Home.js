import React from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner.js';
import backgroundhome from '../../img/backgroundhome.png';
import Thumb from '../../components/Thumb/thumb.js';
import { useNavigate } from 'react-router-dom';



function Home() {
  const navigate = useNavigate();
  const ThumbClick = (text) => {
    console.log(`Thumb clicked: ${text}`);
    navigate('/Logement');
  };
  return (
    <div className="scene">
      <Banner text="Chez vous, partout et ailleurs" image={backgroundhome} />
      <div className="thumb-content">
        <Thumb text="logement 1" onClick={() => {ThumbClick('logement 1'); }} />
        <Thumb text="logement 2 " onClick={() => ThumbClick('logement 2')} />
        <Thumb text="logement 3 " onClick={() => ThumbClick('logement 3')} />
        <Thumb text="logement 4 " onClick={() => ThumbClick('logement 4')} />
        <Thumb text="logement 5 " onClick={() => ThumbClick('logement 5')} />
        <Thumb text="logement 6" onClick={() => ThumbClick('logement 6')} />
      </div>
    </div>
  );
}

export default Home;
