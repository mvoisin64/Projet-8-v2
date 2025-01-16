import React from 'react';
import './Logement.scss';
import Slideshow from '../../components/Slideshow/Slideshow.js'
import logements from '../../data/logement.json';
import { useParams } from 'react-router-dom';

function Logement() {
  let id = useParams().id
  let logement = null
  logements.forEach(Logement => {
    if (Logement.id == id) {
      logement = Logement
    }

  }

  )

  return (
    <div className='scene'>
      <Slideshow pictures={logement.pictures}/>
    </div>
  );
}

export default Logement;