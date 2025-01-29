import React from 'react';
import './Rating.scss';
const Rating = ({ rating }) => {
    const stars = Array(5).fill(0);

    return (
        <div className='rating'>

            {/* <div className='stars-container'>
                {stars.map((_, index) => (
                    { (index < rating) ? <i className="fa-solid fa-star star"> </i> : <i className="fa-solid fa-star star"> </i>
}




            ))}
            </div> */}
            
            { /* IDEM LIGNE 10 for(let i =0; i<stars.length; i++) */}

        </div>
    );
}

export default Rating;