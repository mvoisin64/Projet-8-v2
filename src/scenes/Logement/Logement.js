import React from 'react';
import './Logement.scss';
import Slideshow from '../../components/Slideshow/Slideshow.js'
import logements from '../../data/logement.json';
import { Navigate, useParams } from 'react-router-dom';
import Description from '../../components/Description/Description.js';

function Logement() {
  let id = useParams().id
  let logement = null
  console.log(id)

  logements.forEach(Logement => {
    if (Logement.id == id) {
      logement = Logement

    }

  }
  )
  console.log(logement)

  if (logement === null)
    {
    return <Navigate to={"404"}/>
  
  }

  return (
    <div className='scene'>
      <Slideshow pictures={logement.pictures} />
      <Description key={logement.id} descriptionlogement={logement} />



    </div>
  );
}

export default Logement;