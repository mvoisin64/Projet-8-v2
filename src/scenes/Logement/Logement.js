import React from 'react';
import './Logement.scss';
// import Slideshow from '../../components/Slideshow/Slideshow.js'
import logement from '../../data/logement.json';

function Logement() {

  return (
    <div className='scene'>
      <Slideshow />
      <Description />
    </div>
  );
}

export default Logement;