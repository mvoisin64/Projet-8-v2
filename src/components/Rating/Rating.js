import React from 'react';
import './Rating.scss';
const Rating = ({ rating }) => {
    const stars = Array(5).fill(0);

    return (
        <div className='rating'>

            <div className='stars-container'>
                {stars.map((_, index) => (
                    (index < rating) ? <i key={index} className=" fullstar fa-solid fa-star"> </i> : <i key={index} className="fa-solid fa-star star"> </i>





            ))}

            </div>
        </div>
    );
}

export default Rating;