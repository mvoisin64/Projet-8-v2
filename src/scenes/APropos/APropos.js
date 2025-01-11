import React from 'react';
import backgroundapropos from '../../img/backgroundapropos.png';
import Banner from '../../components/Banner/Banner.js';
import Collapse from '../../components/Collapse/Collapse.js'
import './APropos.scss';

function APropos() {
  return (
    <div className='scene'>
      <Banner text="" image={backgroundapropos} />
      <div className='collapse-container'>
        <Collapse title={'Fiabilité'}>
          <div>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes
            les informations sont régulièrement verifiées par nos équipes.
          </div>
        </Collapse>

        <Collapse title={'Respect'}>
          <div>La bienveillance fait partie des valeurs fondatrices de Kasa.
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
        </Collapse>

        <Collapse title={'Service'} >
          <div>La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance</div>
        </Collapse>

        <Collapse title={'Sécurité'} >
          <div>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécuritédomestique pour nos hôtes.</div>
        </Collapse>

      </div>
    </div>
  );
}
export default APropos;