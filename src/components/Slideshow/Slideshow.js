import React, { useState } from 'react';
import './Slideshow.scss'
import Arrowcarousel from '../../img/Arrowcarousel.png'


const Slideshow = ({ pictures }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const GoToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        console.log(currentIndex)
    };

    const GoToNext = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        console.log(currentIndex)
    }
    return (
        <div className='slideshow'>
            <div className='slideshow-conteneur'>

                <img src={pictures[currentIndex]}
                    alt="Logementexemple"
                    className='logementpic' />

                <button onClick={GoToPrevious}>
                    <img src={Arrowcarousel}
                        alt="Arrowcarousel1"
                        className='arrowcarousel arrowcarousel-1'
                    />
                </button>
                <button onClick={GoToNext}>
                    <img src={Arrowcarousel}
                        alt="Arrowcarousel2"
                        className='arrowcarousel arrowcarousel-2'
                    />
                </button>

                <div className='countslide'>{currentIndex + 1}/{pictures.length}</div>
            </div>
        </div>



    )

}


export default Slideshow;