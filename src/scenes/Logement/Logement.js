import React from 'react';
import './Logement.scss';
import Accomodation from '../../img/accomodationFicheLogement.png';
import ArrowBack from '../../img/arrow_back.svg';
function Logement() {
  return (
    <div className='scene'>

      <div className='ficheLogement'>

        <div className='imageLogement'>
          <img src={Accomodation} alt='Accomodation' />
        </div>

        {/* <div id='middlesection'>
          <div className='headersLogement'>
            <h1>Cozy loft on the canal Saint-Martin</h1>
            <h2>Paris, Île-de-France, France</h2>
          </div>
          <div className='hostLogement'></div>

          <div className='tagsLogement'>
            <span className='tag'>Cozy</span>
            <span className='tag'>Canal</span>
            <span className='tag'>Paris 10</span>
          </div>
        </div>
        <div className='starsLogement'></div>

      </div>

      <div id='lowersection'>

        <div className='collapsesLogement'>

          <div className='collapseDescription'>
            <span className='collapseTitle'>Description</span>
            <img className='ArrowBack' src={ArrowBack} alt='ArrowBack'/>
          </div>
          <div className='collapseEquipements'></div>

        </div> */}
      </div>

    </div>
  );
}

export default Logement;