import React from 'react';
import './Logement.scss';
import Slideshow from '../../components/Slideshow/Slideshow.js'
import logement from '../../data/logement.json';

function Logement() {

  const logementId = '2345'

  return (
    <div className='scene'>   
    <Slideshow id={logementId}/>

    </div>
  );
}

export default Logement;