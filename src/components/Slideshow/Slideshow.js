import React, { useState } from 'react';
import logement from '../../data/logement.json'; // Importer le fichier JSON
import './Slideshow.scss'
import Logementexemple from '../../img/accomodationFicheLogement.png'
import Arrowcarousel from '../../img/Arrowcarousel.png'


const Slideshow = ({ id }) => {
    console.log(id)
    return (
        <div className='slideshow'>
            <div className='slideshow-conteneur'>

                <img src={Logementexemple}
                    alt="Logementexemple"
                    className='logementpic' />

                <button onClick={() => console.log('Arrowcarousel1 clicked')}>
                    <img src={Arrowcarousel}
                        alt="Arrowcarousel1"
                        className='arrowcarousel arrowcarousel-1'
                    />
                </button>
                <button onClick={() => console.log('Arrowcarousel2 clicked')}>
                <img src={Arrowcarousel}
                        alt="Arrowcarousel2"
                        className='arrowcarousel arrowcarousel-2'
                    />
                </button>

                <div className='countslide'>1/4</div>
            </div>
        </div>



    )

}


export default Slideshow;