import React, { useState } from 'react';
import './Slideshow.scss'
import Arrowcarousel from '../../img/Arrowcarousel.png'


const Slideshow = ({pictures}) => {
    return (
        <div className='slideshow'>
            <div className='slideshow-conteneur'>

                <img src={logement.pictures[0]}
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