import React from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner.js';
import backgroundhome from './../../img/backgroundhome.png';
import Thumb from '../../components/Thumb/thumb.js';
import { useNavigate } from 'react-router-dom';
import logements from '../../data/logement.json';


function Home() {
  
  const navigate = useNavigate();

  const ThumbClick = (id) => {
    console.log(`Thumb clicked: ${id}`);
    navigate('/Logement/'+ id );
  };
  return (
    <div className="scene">
      <Banner text="Chez vous, partout et ailleurs" image={backgroundhome} />
      <div className="thumb-content">


        {logements.map((logement) => { 
          
          return <Thumb key={logement.id} logement={logement} onClick={() => {ThumbClick(logement.id); }} />
})}
      </div>
    </div>
  );
}

export default Home;
